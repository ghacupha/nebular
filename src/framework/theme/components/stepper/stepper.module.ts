/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

import { NbSharedModule } from '../shared/shared.module';
import { NbHorizontalStepperComponent } from './stepper.component';
import { NbVerticalStepperComponent } from './stepper.component';
import { NbStepComponent, NbStepLabelDirective } from './step.component';
import { NbStepperNextDirective, NbStepperPreviousDirective } from './stepper-button.directive';
import { NbStepHeaderComponent} from './step-header/step-header.component';

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [
    NbHorizontalStepperComponent,
    NbVerticalStepperComponent,
    NbStepComponent,
    NbStepperNextDirective,
    NbStepperPreviousDirective,
    NbStepHeaderComponent,
    NbStepLabelDirective,
  ],
  exports: [
    NbHorizontalStepperComponent,
    NbVerticalStepperComponent,
    NbStepComponent,
    NbStepperNextDirective,
    NbStepperPreviousDirective,
    NbStepHeaderComponent,
    NbStepLabelDirective,
  ],
})
export class NbStepperModule {
}
