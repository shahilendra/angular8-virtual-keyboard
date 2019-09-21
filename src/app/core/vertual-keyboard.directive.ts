import { Directive, ElementRef, HostListener, Input, AfterContentInit } from '@angular/core';
declare let $: any;
@Directive({
  selector: '[appVertualKeyboard] [class]'
})
export class VertualKeyboardDirective implements AfterContentInit {
  @Input() id: string;
  @Input() type: string
  constructor(private el: ElementRef, ) {
  }

  ngAfterContentInit() {
    if (this.type === "number") {
      $(`input#${this.id}`).keyboard({
        layout: 'num',
        restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
        preventPaste : true,  // prevent ctrl-v and right click
        autoAccept : true
      }).addTyping();

    } else {
      $(`input#${this.id}`).mlKeyboard({
        layout: 'en_US',
        active_shift: true
      });
    }


  }

}
