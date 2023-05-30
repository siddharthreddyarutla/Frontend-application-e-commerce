import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = "https://dummyjson.com/products";
  localhost_url: string = "http://localhost:8080";
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

  getAllProductsAddedToCart(userId: any) {
    return this.http.get(`${this.localhost_url}/cart/getCompleteProductsDetailsAddedToCart?userId=` + userId);
  }

  getPreOrderDetailsForCart(userId: any) {
    return this.http.get(`${this.localhost_url}/cart/getPreOrderDetailsOfCart?userId=` + userId);
  }

  removeItemFromCart(userId: any, productId: any) {
    return this.http.delete(`${this.localhost_url}/cart/removeProductFromCart?userId=${userId}&productId=${productId}`);
  }
}
