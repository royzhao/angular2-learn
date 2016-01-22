///<reference path="../typings/ace/ace.d.ts" />
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';



@Component({
  selector: 'my-editor',
  template:`
  <h1>Editor</h1>
  <div id="my_ace_editor">
    
  </div>
    `,
    styles:[`
    #my_ace_editor { 
        width:500px;
        height:500px;
    }
`]
})

export class EditorComponent implements OnInit {
    _editor:AceAjax.Editor;
	init(){
        this._editor = ace.edit("my_ace_editor");
        this._editor.setTheme("ace/theme/monokai");
        this._editor.getSession().setMode("ace/mode/javascript");
    }
    ngOnInit() {
		this.init();
	}
}

