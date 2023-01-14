import styled from 'styled-components';

const Navigation = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #fdfdfd;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    text-align: center;
    color: #e3fdfd !important;
    

    ul {
        display: flex;
        width: 350px;
        background: #fdfdfd;
        border-radius: 10px;
    }

    ul li {
        position: relative;
        list-style: none;
        /* 350 / 5 = 70 */
        width: 70px;
        height: 60px;
        z-index: 2;
    }

    ul li .link {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        text-align: center;
        font-weight: 500;
    }

    ul li .link .icon {
        position: relative;
        display: block;
        line-height: 65px;
        font-size: 1.5em;
        /* text-align: center; */
        transition: 0.5s;
        color: #222327;
    }

    ul li.active .link .icon {
        transform: translateY(-32px);
        color: #2196f3;
    }

    ul li .link .text {
        position: absolute;
        background: #2196f3;
        color: #fff;
        padding: 2px 7px;
        border-radius: 12px;
        font-weight: 400;
        font-size: 0.75em;
        letter-spacing: 0.05em; /* 字符间距 */
        transition: 0.5s;
        opacity: 0;
        transform: translateY(15px);
    }

    .indicator {
  position: absolute;
  top: -35px;
  width: 70px;
  height: 70px;
  background: #fdfdfd;
  border-radius: 50%;
  /* border: 6px solid #222327; */
  transition: 0.5s;
}

.indicator::before {
  content: '';
  position: absolute;
  top: 5px;
  left: -28px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 15px 18px #fdfdfd;
}

.indicator::after {
  content: '';
  position: absolute;
  top: 5px;
  right: -28px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
  box-shadow: -15px 18px #fdfdfd;
}

    

    ul li.active .link .text {
        opacity: 1;
        transform: translateY(-4px);
    }
    ul li:nth-child(1).active ~ .indicator {
        transform: translateX(calc(70px * 0));
    }
    ul li:nth-child(2).active ~ .indicator {
        transform: translateX(calc(70px * 1));
    }
    ul li:nth-child(3).active ~ .indicator {
        transform: translateX(calc(70px * 2));
    }
    ul li:nth-child(4).active ~ .indicator {
        transform: translateX(calc(70px * 3));
    }
    ul li:nth-child(5).active ~ .indicator {
        transform: translateX(calc(70px * 4));
    }
`

const Indicator = styled.div`
    
`

export { Navigation, Indicator }