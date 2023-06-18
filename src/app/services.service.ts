import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = "https://dummyjson.com/products";
  localhost_url: string = "http://localhost:8089";
  constructor(private http: HttpClient) { }

  userLogin(data: any) {
    return this.http.post(`${this.localhost_url}/user/login`, data);
  }

  getProducts() {
    return this.http.get(`${this.localhost_url}/product/getDetails`);
  }

  postProductDetails(data: any) {
    return this.http.post(`${this.localhost_url}/product/postDetails`, data);
  }

  sortRatingByAsc() {
    return this.http.get(`${this.localhost_url}/product/sortByRatingAsc`);
  }

  sortRatingByDesc() {
    return this.http.get(`${this.localhost_url}/product/sortByRatingDesc`);
  }

  sortDiscountByAsc() {
    return this.http.get(`${this.localhost_url}/product/sortByDiscountAsc`);
  }

  sortDiscountByDesc() {
    return this.http.get(`${this.localhost_url}/product/sortByDiscountDesc`);
  }

  addToCart(data: any) {
    return this.http.post(`${this.localhost_url}/cart/addToCart`, data);
  }

  getAllProductsAddedToCart(userId: number) {
    return this.http.get(`${this.localhost_url}/cart/getCompleteProductsDetailsAddedToCart?userId=` + userId);
  }

  getPreOrderDetailsForCart(userId: number) {
    return this.http.get(`${this.localhost_url}/cart/getPreOrderDetailsOfCart?userId=` + userId);
  }

  removeItemFromCart(userId: number, productId: number) {
    return this.http.delete(`${this.localhost_url}/cart/removeProductFromCart?userId=${userId}&productId=${productId}`);
  }

  editProductQuantityInCart(userId: number, productId: number, quantity: number) {
    // const params = new HttpParams();
    // params.set('userId', userId)
    //   .set('productId', productId)
    //   .set('quantity', quantity)
    return this.http.put(`${this.localhost_url}/cart/editProductQuantityInCart?userId=${userId}&productId=${productId}&quantity=${quantity}`, null);
  }

  getAllProductsAddedToWishlist(userId: number) {
    return this.http.get(`${this.localhost_url}/cart/getAllCompleteProductsDetailsAddedToWishList?userId=` + userId);
  }
}
