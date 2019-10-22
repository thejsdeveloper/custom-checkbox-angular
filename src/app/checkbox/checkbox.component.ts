import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  ElementRef,
  Input,
  SimpleChanges,
  forwardRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { CheckboxModel } from "./checkbox.model";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() idKey = "code";
  @Input() model;
  checkbox: CheckboxModel = {
    code: '',
    name: '',
    selected: false
  };

  onChange;
  onTouched;
  @ViewChild("checkboxEle", { static: true }) checkboxEle: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  writeValue(model: CheckboxModel): void {
    const checkbox = this.checkboxEle.nativeElement;
    if (model) {
      this.renderer.setProperty(checkbox, "checked", model.selected);
      this.checkbox = model;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  change(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.checkbox.selected = event.target.checked;
    this.onChange(this.checkbox);
    this.onTouched(this.checkbox);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const checkbox = this.checkboxEle.nativeElement;
    isDisabled
      ? this.renderer.setProperty(checkbox, "disabled", true)
      : this.renderer.setProperty(checkbox, "disabled", false);
  }
}
