import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>REST vs GraphQL Demo (Angular)</h1>

      <!-- REST rész -->
      <div style="margin-bottom: 30px; padding: 15px; border: 1px solid #ccc; border-radius: 5px;">
        <h2 style="color: #1976d2;">REST API</h2>
        <button 
          (click)="fetchUsersREST()" 
          [disabled]="loadingREST"
          style="padding: 10px 15px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">
          {{ loadingREST ? 'Loading...' : 'Load Users (REST)' }}
        </button>
        
        <div *ngIf="restError" style="color: red; margin-top: 10px;">
          {{ restError }}
        </div>
        
        <ul style="margin-top: 15px; list-style-type: none; padding: 0;">
          <li *ngFor="let user of usersREST" 
              style="padding: 8px; margin: 5px 0; background: #f5f5f5; border-radius: 4px;">
            <strong>{{ user.name }}</strong>
            <span *ngIf="user.email" style="display: block; color: #666;">📧 {{ user.email }}</span>
            <span *ngIf="user.phone" style="display: block; color: #666;">📞 {{ user.phone }}</span>
          </li>
        </ul>
      </div>

      <!-- GraphQL rész -->
      <div style="padding: 15px; border: 1px solid #ccc; border-radius: 5px;">
        <h2 style="color: #e10098;">GraphQL API</h2>
        <button 
          (click)="fetchUsersGraphQL()" 
          [disabled]="loadingGraphQL"
          style="padding: 10px 15px; background: #e10098; color: white; border: none; border-radius: 4px; cursor: pointer;">
          {{ loadingGraphQL ? 'Loading...' : 'Load Users (GraphQL)' }}
        </button>
        
        <div *ngIf="graphqlError" style="color: red; margin-top: 10px;">
          {{ graphqlError }}
        </div>
        
        <ul style="margin-top: 15px; list-style-type: none; padding: 0;">
          <li *ngFor="let user of usersGraphQL" 
              style="padding: 8px; margin: 5px 0; background: #f5f5f5; border-radius: 4px;">
            <strong>{{ user.name }}</strong>
            <span *ngIf="user.email" style="display: block; color: #666;">📧 {{ user.email }}</span>
            <span *ngIf="user.phone" style="display: block; color: #666;">📞 {{ user.phone }}</span>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class App {
  usersREST: User[] = [];
  usersGraphQL: User[] = [];
  loadingREST = false;
  loadingGraphQL = false;
  restError = '';
  graphqlError = '';

  // --- REST lekérés - MŰKÖDŐ API-val ---
  async fetchUsersREST() {
    this.loadingREST = true;
    this.restError = '';
    this.usersREST = [];
    
    try {
      console.log('Starting REST API call...');
      
      // Használjunk egy megbízható, CORS-supported API-t
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      
      console.log('REST API response:', response.data);
      this.usersREST = response.data.slice(0, 5); // Csak az első 5 felhasználó
      
    } catch (error: any) {
      console.error('REST error:', error);
      this.restError = `Failed to load REST data: ${error.message}`;
      
      // Fallback: helyi adatok, ha az API nem működik
      this.usersREST = [
        { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442' },
        { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125' },
        { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447' }
      ];
    } finally {
      this.loadingREST = false;
    }
  }

  // --- GraphQL lekérés - MŰKÖDŐ GraphQL API-val ---
  async fetchUsersGraphQL() {
    this.loadingGraphQL = true;
    this.graphqlError = '';
    this.usersGraphQL = [];
    
    try {
      console.log('Starting GraphQL API call...');
      
      // Használjunk egy publikus, működő GraphQL API-t
const query = `
  {
    users {
      data{
            id 
      name
      }
    }
  }
`;


      // Public GraphQL API that supports CORS
      const response = await axios.post('https://graphql-demo.mead.io/', { 
        query 
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log('GraphQL API response:', response.data.data.users.data);
      
      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }
      
      this.usersGraphQL = response.data.data.users;
      
    } catch (error: any) {
      console.error('GraphQL error:', error);
      this.graphqlError = `Failed to load GraphQL data: ${error.message}`;
      
      // Fallback: helyi adatok, ha a GraphQL API nem működik
      this.usersGraphQL = [
        { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '123-456-7891' },
        { id: 3, name: 'Carol Davis', email: 'carol@example.com', phone: '123-456-7892' }
      ];
    } finally {
      this.loadingGraphQL = false;
    }
  }
}