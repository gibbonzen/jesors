import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef
  private g: CanvasRenderingContext2D

  private mouseDown: boolean = false
  private lastPoint

  constructor(private renderer: Renderer2,
    private storage: StorageService) { }
    
    ngOnInit() {
      this.g = this.canvas.nativeElement.getContext('2d') // extract canvas object
      this.g.canvas.height = 150
      
      this.renderer.setStyle(this.canvas.nativeElement, "border", "1px solid lightgrey")

      this.drawImg(this.storage.get("signature", ""))
    }

    clear() {
      this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height)
      this.lastPoint = undefined
    }
    
    drawLine(a, b) {
      this.g.save()
      this.g.beginPath()
      this.g.moveTo(a.x, a.y)
      this.g.lineTo(b.x, b.y)
      
      this.g.lineWidth = 2
      this.g.lineCap = 'round'
      this.g.strokeStyle = "black"
      
      this.g.stroke()
      this.g.closePath()
      this.g.restore()
    }
    
    drawPoint(x, y) {
      this.g.save()
      this.g.beginPath()
      this.g.rect(x, y, 2, 2)
      
      this.g.fill()
      this.g.closePath()
      this.g.restore()
    }

    drawImg(img) {
      let image = new Image()
      image.src = img
      this.g.drawImage(image, 0, 0)
    }

    @HostListener('mouseup', ['$event'])
    @HostListener('touchend', ['$event'])
    onMouseUp(e: Event) {
      this.lastPoint = undefined
      this.mouseDown = false

      let png = this.g.canvas.toDataURL('image/png')
      this.storage.put("signature", png)
    }
    
    @HostListener('mousedown', ['$event'])
    @HostListener('touchstart', ['$event'])
    onMouseDown(e: Event) {
      this.mouseDown = true
      
    let rect = this.g.canvas.getBoundingClientRect()
      if(e instanceof MouseEvent)
        this.drawPoint(e.offsetX,e.offsetY)

    else if(e instanceof TouchEvent) 
        this.drawPoint(e.changedTouches[0].pageX - rect.left, e.changedTouches[0].pageY - rect.top)

    }

    @HostListener('mousemove', ['$event'])
    @HostListener('touchmove', ['$event'])
    onMouseMove(e: Event) {
      e.preventDefault()

      let rect = this.g.canvas.getBoundingClientRect()
      let current

      if(e instanceof MouseEvent)
        current = { x: e.offsetX, y: e.offsetY }

      else if(e instanceof TouchEvent) 
        current = {x: e.changedTouches[0].pageX - rect.left, y: e.changedTouches[0].pageY - rect.top }
      
      if(this.mouseDown) {
        if(this.lastPoint !== undefined) {
          this.drawLine(this.lastPoint, current)
        }

        this.lastPoint = current
      }

    }


}
