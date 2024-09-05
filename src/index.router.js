import categoryRouter from './modules/category/category.routes.js'
import { globalErrorHandling } from './utils/errorHandling.js'
import subCategoryRouter from './modules/subcategory/subcategory.routes.js'
import brandRouter from './modules/brand/brand.routes.js'
import productRouter from './modules/product/product.routes.js'
import userRouter from './modules/user/user.routes.js'
import authRouter from './modules/auth/auth.routes.js'
import reviewRouter from './modules/reviews/reviews.routes.js'
import wishListRouter from './modules/wishList/wishList.routes.js'
import addressRouter from './modules/addresses/address.routes.js'
import cartRouter from './modules/cart/cart.routes.js'
import orderRouter from './modules/order/order.routes.js'
import couponRouter from './modules/coupon/coupon.routes.js'

//endpoints:
export function bootstrap(app) {
    app.use('/api/categories', categoryRouter)
    app.use('/api/subCategories', subCategoryRouter)
    app.use('/api/brands', brandRouter)
    app.use('/api/products', productRouter)
    app.use('/api/users', userRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/reviews', reviewRouter)
    app.use('/api/wishList', wishListRouter)
    app.use('/api/addresses', addressRouter)
    app.use('/api/coupon', couponRouter)
    app.use('/api/carts', cartRouter)
    app.use('/api/orders', orderRouter)


    app.use('*', (req, res, next) => {
        next(new Error('Page Not Found', { cause: 404 }))
    })

    app.use(globalErrorHandling)
}
