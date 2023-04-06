import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProducts, updateProduct } from './api/product'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { IProduct } from './interfaces/products'
import ProductDetailPage from './pages/ProductDetail'
import { Dashboard } from './admin/Dashboard'
import AddProductPage from './admin/AddProduct'
import UpdateProductPage from './admin/UpdateProduct'
import { ProductManagement } from './admin/ProductManagement'
import { CreateAccount } from './login/CreateAccount'
import AdminLayout from './admin/layout/AdminLayout'
import { Login } from './login/Login'
import { ICategory } from './interfaces/category'
import { addCategory, deleteCategory, getAllCategories, updateCategory } from './api/category'
import { CategoryManagement } from './admin/category/CategoryManagement'
import AddCategoryPage from './admin/category/AddCategory'
import UpdateCategoryPage from './admin/category/UpdateCategory'
// import './App.css'

function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])
  useEffect(() => {
    getAllProducts().then(({ data }) => setProduct(data))
    getAllCategories().then(({data}) => setCategories(data))
  }, [])

  const onHandleRemove = (id: number | string) => {
    const confirm = window.confirm("Ban co muon xoa")
    if (confirm) {
      deleteProduct(id).then(() => setProduct(products.filter((item) => item._id !== id)))
    }

  }

  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProduct([...products, product]))
  }

  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => setProduct(products.map((item) => item._id == product._id ? product : item)))
  }

  const onHandleAddCate = (category: ICategory) => {
    addCategory(category).then(() => setCategories([...categories, category]))
  }

  const onHandleUpdateCate = (category: ICategory) => {
    updateCategory(category).then(() => setCategories(categories.map((item) => item.id == category.id ? category : item)))
  }

  const onHandleRemoveCate = (id: number | string) => {
    const confirm = window.confirm("Ban co muon xoa")
    if (confirm) {
      deleteCategory(id).then(() => setCategories(categories.filter((item) => item.id !== id)))
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage products={products} />} />
          </Route>
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path='update/:id' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
          </Route>
          <Route path='categories'>
            <Route index element={<CategoryManagement categories={categories} onRemove={onHandleRemoveCate}/>}/>
            <Route path='add' element={<AddCategoryPage onAdd={onHandleAddCate}/>} />
            <Route path='update/:id' element={<UpdateCategoryPage categories={categories} onUpdate={onHandleUpdateCate}/>}/>
          </Route>
        </Route>
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/signin' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
