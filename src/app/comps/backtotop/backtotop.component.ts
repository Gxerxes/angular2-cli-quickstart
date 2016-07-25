import { Component, ViewChild, HostListener, Input, ElementRef, ViewEncapsulation, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
  moduleId: module.id,
  selector: 'app-backtotop',
  templateUrl: 'backtotop.component.html',
  styleUrls: ['backtotop.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BacktotopComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  @ViewChild('baBackTop') private _selector:ElementRef;

  ngAfterViewInit () {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick():boolean {
    jQuery('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }

}
