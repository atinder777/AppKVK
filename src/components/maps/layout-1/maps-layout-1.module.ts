import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MapsLayout1 } from "./maps-layout-1";
import { ElasticHeaderModule } from "../../elastic-header/elastic-header.module";

import { AgmCoreModule } from "@agm/core";

@NgModule({
	declarations: [MapsLayout1],
	imports: [ElasticHeaderModule, IonicPageModule.forChild(MapsLayout1)],
	exports: [MapsLayout1],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsLayout1Module {}
