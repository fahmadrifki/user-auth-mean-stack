import { Component } from '@angular/core';

@Component ({
    selector:'my-input',
    template: `
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                    </form>
                </div>
            </div>
        </div>
`
})

export class MessageInputComponent {

}