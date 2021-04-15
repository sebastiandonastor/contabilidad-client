import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IconsProviderModule } from '../icons-provider.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzGridModule,
    NzPaginationModule,
    NzTypographyModule,
    NzTableModule,
    NzButtonModule,
    IconsProviderModule,
    NzToolTipModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzSelectModule,
    NzSwitchModule,
    NzMessageModule,
    NzPopconfirmModule,
  ],
})
export class PowerUiModule {}
