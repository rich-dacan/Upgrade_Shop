import React           from 'react';
import { useSelector } from 'react-redux';
import { Link }        from 'react-router-dom';

import { FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
import { HeaderStyles } from './styles';
import { GiUpgrade }     from 'react-icons/gi';

export default function Header({ cartStatus = false }) {

  const cart = useSelector(({ cart }) => cart );

  return (
    <>
      { cartStatus ? (
        <HeaderStyles>
          <span>
            <h1> Upgrade Shop </h1>
            <i>
              <GiUpgrade/>
            </i>
          </span>
          <span>
            <button>
              <FaShoppingCart/>
              {cart.length > 0 ? <p>{cart.length}</p> : <></>}
            </button>
            <Link to='/'>
              <button> 
                Back
                <i>
                  <FaSignInAlt/>
                </i>
              </button>
            </Link>
          </span>
        </HeaderStyles>

      ) : (
        <HeaderStyles>
          <span>
            <h1> Upgrade Shop </h1>
            <i>
              <GiUpgrade/>
            </i>
          </span>
          <span>
            <Link to='/cart'>
              <button>
                <FaShoppingCart/>
                {cart.length > 0 ? <p>{cart.length}</p> : <></>}
              </button>
            </Link>
            <button> 
              <i>
                <FaSignInAlt/>
              </i>
              Login
            </button>
          </span>
        </HeaderStyles>
      )}
    </>
  );
};
