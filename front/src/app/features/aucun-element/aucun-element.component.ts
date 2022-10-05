import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aucun-element',
  templateUrl: './aucun-element.component.html',
  styleUrls: ['./aucun-element.component.scss'],
})
export class AucunElementComponent implements OnInit {
  @Input() nameIcone!: string;
  @Input() message!: string;

  constructor() {}

  ngOnInit(): void {}
}
