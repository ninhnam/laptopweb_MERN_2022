import React from 'react'
import { connect } from 'react-redux';
import DetailProduct from './../../components/DetailProduct/index'

function DetailProductContainer(props) {
    let detailPathname = props.location.pathname
    let productDetailName = detailPathname.slice(10, detailPathname.length)
    let { listProducts } = props;
    var detailPrd = null;
    if(listProducts.length > 10){
        listProducts.forEach(item => {
            if(item.name.replace(/\s/g,'').includes(productDetailName)){
                detailPrd = item
            }
        })
    }

    return (
        <DetailProduct product={detailPrd} />
    )
} 

const mapStateToProps = (state) => {
    return {
      listProducts: state.product,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {};
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(DetailProductContainer);
