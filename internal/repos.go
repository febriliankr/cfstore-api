package internal

import "github.com/febriliankr/go-cfstore-api/internal/entities"

type KantinRepo interface {
	CreateProduct(in entities.CreateProductRequest) (entities.CreateProductResponse, error)
	GetProduct(in entities.GetProductRequest) (entities.GetProductResponse, error)
	GetProductList(in entities.GetProductListRequest) (entities.GetProductListResponse, error)
	DeleteProduct(in entities.DeleteProductRequest) (entities.DeleteProductResponse, error)
	UpdateCanteenBalance(in entities.UpdateCanteenBalanceRequest) (entities.UpdateCanteenBalanceResponse, error)
	CreateUser(in entities.CreateUserRequest) (entities.CreateUserResponse, error)
	GetUser(in entities.GetUserRequest) (entities.GetUserResponse, error)
}
