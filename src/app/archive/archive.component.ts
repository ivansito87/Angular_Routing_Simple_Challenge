import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  year: number;
  month: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    let params = this.route.snapshot.paramMap;
    this.year = +params.get("year");
    this.month = +params.get("month");
  }

  // To navigate the user when a button is clicked
  viewAll() {
    this.router.navigate(["/"]);
  }

}
