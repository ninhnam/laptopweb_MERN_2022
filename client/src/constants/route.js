
import HomePageContainer from "../containers/HomePageContainer"
import SearchContainer from "../containers/SearchContainer"
import TrademarkContainer from "../containers/TrademarkContainer"

export const CLIENT_ROUTES = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: HomePageContainer
    },
    {
        path: '/dellTradeMark',
        name: 'Laptop Dell',
        exact: true,
        component: TrademarkContainer
    },
    {
        path: '/HPTradeMark',
        name: 'Laptop HP',
        exact: true,
        component: TrademarkContainer
    },
    {
        path: '/macbookTradeMark',
        name: 'Apple Macbook',
        exact: true,
        component: TrademarkContainer
    },
    {
        path: '/thinkpadTradeMark',
        name: 'Lenovo Thinkpad',
        exact: true,
        component: TrademarkContainer
    },
    {
        path: '/searchPage',
        name: 'Search',
        exact: true,
        component: SearchContainer
    },
]   

