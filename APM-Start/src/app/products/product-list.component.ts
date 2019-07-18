import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    // providers: [ProductService] // Inyect el servicio localmente y para los componentes anidados
})
export class ProductListComponent implements OnInit, OnDestroy {

    constructor(private productService: ProductService) {
    }

    pageTitle: string;
    imageMargin: number;
    showImage: boolean;
    _listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage: string;

    get listFilter(): string {
        return this._listFilter;
    };

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
        
        this.pageTitle = 'Product List';
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
    };

    ngOnDestroy(): void {
        throw new Error("Destroy Method not implemented.");
    };

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    };

    onRaitingClicked(message: string): void {
        alert(message);
    };
}
