import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    // Create a spy object for ProductsService
    const spy = jasmine.createSpyObj('ProductsService', ['getProducts']);

    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [{ provide: ProductsService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productServiceSpy = TestBed.inject(
      ProductsService
    ) as jasmine.SpyObj<ProductsService>;

    // Mock the service method to return an observable with some test data
    productServiceSpy.getProducts.and.returnValue(
      of([{ title: 'Todo 1', userId: 1, completed: false, id: 2 }])
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts on the ProductsService when initialized', () => {
    // Verify that getProducts was called
    expect(productServiceSpy.getProducts).toHaveBeenCalled();
  });

  it('should populate todos with data from the service', () => {
    // Verify that todos array gets populated correctly
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe('Todo 1');
  });
});
