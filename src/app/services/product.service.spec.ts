import { TestBed, inject } from '@angular/core/testing';

import { ShoppingListService } from './product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('ShoppingService', () => {
    beforeEach(() => {
        const spy = jasmine.createSpyObj('MatSnackBar', ['open']);
        TestBed.configureTestingModule({
            providers: [ShoppingListService,
                { provide: MatSnackBar, useValue: spy }],

        });
    });

    it('should be created',
        inject([ShoppingListService],
            (service: ShoppingListService) => {
                expect(service).toBeTruthy();
            }));
});
