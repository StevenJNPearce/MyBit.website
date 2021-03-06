import CountdownHours from '../countdownHours';
import { Button } from 'antd';
import Link from 'next/link'
import { MYBIT_TOKEN_SALE_WEBSITE } from '../constants';

const TokenSaleDetails = ({currentPeriod, secondsUntilNextPeriod, exchangeRate, currentPeriodTotal, active}) => {
  return (
    <div className="TokenSaleDetails TokenSaleDetails--is-active">
      <p className="Banner__title">Period <span className="Banner__title--is-blue">{`#${currentPeriod}`}</span> ends in:
        <span className="TokenSaleDetails__countdown">
        {currentPeriod && (
          <CountdownHours
            time={secondsUntilNextPeriod}
            key={currentPeriod}
          />
        )}
        </span>
      </p>
      <div className="TokenSaleDetails__group">
        <div>
          <p className="TokenSaleDetails__title">Current Exchange Rate</p>
          <p className="TokenSaleDetails__value">{`1 ETH = ${exchangeRate.toLocaleString('en-US', {maximumFractionDigits: 0})} MYB`}</p>
        </div>
        <div>
          <p className="TokenSaleDetails__title">ETH Received</p>
          <p className="TokenSaleDetails__value">{`${currentPeriodTotal.toLocaleString('en-US')} ETH`}</p>
        </div>
      </div>
      <a
        href={MYBIT_TOKEN_SALE_WEBSITE}
        target="_blank"
      >
       <Button
          type="primary"
          className="TokenSaleDetails-btn"
        >
          Contribute
        </Button>
      </a>
    </div>
  )
}

export default TokenSaleDetails;
