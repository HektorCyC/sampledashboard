import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Import common packages to use appwide
import { LottieModule } from "ngx-lottie";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgxEchartsModule } from "ngx-echarts";
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LottieModule,
    MatTabsModule,
    MatInputModule,
    CKEditorModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgxEchartsModule,
    MatTooltipModule
  ],
  exports: [
    LottieModule,
    MatTabsModule,
    MatInputModule,
    CKEditorModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgxEchartsModule,
    MatTooltipModule
  ]
})
export class SharedModule {}
