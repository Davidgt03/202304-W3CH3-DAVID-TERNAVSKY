import { Component } from './components';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <div class="list" >
    
     <li>🐕</li>
  <li>🐕</li>
  <li>🐕</li>
  <li>🐕</li>
  
  <img src="img/c.jpg" alt="" width="200px" height="200px">
   </div>
    <div class="list">
     <li>🐕</li>
  <li>🐕</li>
  <li>🐕</li>
  <li>🐕</li>
  
  <img src="img/p.jpg" alt="" width="200px" height="200px">
   </div>

  <div class="list">
     <li>🐕</li>
  <li>🐕</li>
  <li>🐕</li>
  <li>🐕</li>
  
  <img src="img/t.jpg" alt="" width="200px" height="200px">
   </div>
  `;
  }
}
