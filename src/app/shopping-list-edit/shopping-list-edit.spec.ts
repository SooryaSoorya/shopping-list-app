import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListEditComponent } from './shopping-list-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
describe('ShoppingListEditComponent', () => {
    let component: ShoppingListEditComponent;
    let fixture: ComponentFixture<ShoppingListEditComponent>;

    beforeEach(async(() => {
        const spy = jasmine.createSpyObj('MatSnackBar', ['open']);

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [ShoppingListEditComponent],
            providers: [
                { provide: MatSnackBar, useValue: spy }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShoppingListEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
