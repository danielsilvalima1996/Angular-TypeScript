import { NgModule } from "@angular/core";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";
import { SharedModule } from "app/shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [
    { path: '', component: OrderComponent },
]

@NgModule({
    declarations: [
        DeliveryCostsComponent,
        OrderItemsComponent,
        OrderComponent
    ],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule { }