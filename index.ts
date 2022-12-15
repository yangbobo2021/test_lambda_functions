router.beforeEach((to, from, next) => {
    if (to.path === '/exception/403') {
        next()
    } else {
        if (roleStore.role) {
            next()
        } else {
            roleStore.getRole().then(res => {
                next()
            })
        }
    }
})

router.afterEach(() => {
    done()
})

export default router
