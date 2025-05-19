import { Component, OnInit } from '@angular/core'; 
import { SharedService } from '../services/shared.service'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
@Component({ 
  selector: 'app-shipments', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './shipments.component.html', 
  styleUrls: ['./shipments.component.scss'] 
} 
)  
export class shipmentsComponent implements OnInit {  
  tables: string[] = []; 
  dataMap: any = {}; 
  constructor(private service: SharedService, private router: Router) {} 
  ngOnInit(): void { 
      this.service.getUsers().subscribe(data => { 
      console.log("Données reçues:", data ); 
      if (data && typeof data === "object") { 
        this.tables = Object.keys(data); 
        this.dataMap = data; 
        } else { 
          this.tables = [];  
          this.dataMap = {};   
        }  
      }  
      );  
    }  
//get columns for the table dynamically  
    getColumns(table: string): string[] { 
        return this.dataMap[table] && this.dataMap[table].length > 0  
          ? Object.keys(this.dataMap[table][0]) : []; 
    } 
 // Get the values of a row dynamically  
    getValues(row: any): any[] {  
      return Object.values(row);  
  }  
// New Methods for the Buttons 
    viewshipments(shipments: any): void { 
    console.log('View shipments:', shipments); 
    alert(`Viewing shipments: ${JSON.stringify(shipments, null, 2)}`); 
} 
    updateshipments(shipments: any): void { 
    this.router.navigate(['/update', 'shipments', shipments._id]); 
  } 
    deleteshipments(shipmentsId: string): void { 
    console.log('Delete shipments ID:', shipmentsId); 
    this.service.deleteItem('shipments',shipmentsId).subscribe(  
       response => { 
           console.log('shipments deleted successfully', response); 
           // Mise à jour de l'affichage des données après suppression 
           this.dataMap['shipments'] = this.dataMap['shipments'].filter((shipments: any) => shipments._id !== shipmentsId); 
           alert('shipments Deleted!'); 
       }, 
       error => { 
           console.error('Error deleting shipments:', error); 
           alert('Failed to delete shipments!'); 
       }  
    ); 
} 
} 
