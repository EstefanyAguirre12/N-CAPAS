import { Tenantid } from "./../../core/interfaces/bed";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { BedService } from "./../../core/services/bed.service";
import { Component, OnInit } from "@angular/core";
import { Bed } from "app/core/interfaces/bed";

@Component({
  selector: "app-beds",
  templateUrl: "./beds.component.html",
  styleUrls: ["./beds.component.css"],
})
export class BedsComponent implements OnInit {
  public bedList: Bed[] = [];

  public formBed: FormGroup = new FormGroup({
    bedNumber: new FormControl(null, [Validators.required]),
    tenantId: new FormControl("1", [Validators.required]),
  });

  constructor(private _bedService: BedService) {}

  ngOnInit(): void {
    this._bedService.getBeds().subscribe((response) => {
      this.bedList = response.data;
      console.log(response);
    });
  }

  onCreateBed(): void {
    if (this.formBed.valid) {
      this._bedService
        .createBed(this.formBed.getRawValue())
        .subscribe((response) => {
          console.log(response);
        });
      let bedTemp: Bed = {
        id: this.formBed.getRawValue().bedNumber,
        number: this.formBed.getRawValue().bedNumber,
        tenantid: {
          id: 3,
          firstname: "string",
          lastname: "string",
          birthday: "string",
          gender: "string",
          status: "string",
        },
      };
      this.bedList.push(bedTemp);
    } else {
    }
  }

  onDeleteBed(id: Number): void {
    this.bedList = this.bedList.filter((bed) => !(bed.id == id));
    this._bedService.deleteBed(id).subscribe((response) => {
      console.log(response);
    });
  }
}
