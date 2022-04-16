import { Component, OnInit } from '@angular/core';
import { Survey } from '../types/Survey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];

  status = 'status';
  category = 'category';
  filteredList: Survey[];

  surveyList: Survey[] = [
    {
      title: 'Designer Survey',
      category: 'Workplace',
      status: 'Active',
      label: 'New Framework',
    },
    {
      title: 'Developer Survey',
      category: 'Development',
      status: 'Active',
      label: 'Education',
    },
    {
      title: 'Backend Survey',
      category: 'Hardware',
      status: 'Completed',
      label: 'Personal',
    },
  ];

  ngOnInit() {}

  onFilterSelected(filter: any, type: string) {
    let temp;
    if (type == 'status') {
      temp =
        filter != 'All'
          ? this.surveyList.filter((surveys) => surveys.status == filter)
          : this.surveyList;
    } else {
      temp = this.surveyList.filter((surveys) => surveys.category == filter);
    }
    this.filteredList = temp;
    ////////////// in short form instead of these
    // let temp;
    // type == 'status'
    //   ? (temp =
    //       filter != 'All'
    //         ? this.surveyList.filter((surveys) => surveys.status == filter)
    //         : this.surveyList)
    //   : (temp = this.surveyList.filter(
    //       (surveys) => surveys.category == filter
    //     ));
    // this.filteredList = temp;
  }
}
