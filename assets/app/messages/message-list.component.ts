import { Component } from '@angular/core';

@Component({
    selector: 'my-list',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">Email</div>
                <div class="panel-body">
                    <ul class="list-group">
                        <li *ngFor="#myItem of itemList" class="list-group-item spacing" (click)="onItemClicked(myItem)"> {{myItem.name}}
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span>
                            </button>
                            <button type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash" (click)="onDeleteItem()" aria-hidden="true"></span>
                            </button>
                        </li>
                        <input type="text" [(ngModel)]="clickedItem.name">
                    </ul>
                </div>
        </div>
    `
})

export class MessageListComponent{
    public itemList = [
        {name:"test@test.com"},
        {name:"fahmad@gmail.com"},
    ];
    public clickedItem = {name:""};
        onItemClicked(itemList) {
            this.clickedItem = itemList;
        }
        onAddItem(itemList) {
            this.itemList.push({name: itemList.value});
        }
        onDeleteItem() {
            this.itemList.splice(this.itemList.indexOf(this.clickedItem),1);
        }
}