import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import arrowRight from './assets/arrow_right.svg';
import clock from './assets/clock.svg';
import { DotsFrame } from './DotsFrame';
import { appSt } from './style.css';

export const App = () => {
  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive className={appSt.mainTitle} tag="h1" view="large" font="system" weight="bold">
          Инвесткопилка
        </Typography.TitleResponsive>

        <Typography.Text className={appSt.subtitle} view="component" color="secondary">
          Взрастите ваше денежное дерево
        </Typography.Text>

        <div className={appSt.dotContainer}>
          <DotsFrame lvl={0} lvlFill={'#90AE10'} containerClassName={appSt.frame}>
            <div className={appSt.imgTree()} />
          </DotsFrame>
        </div>

        <div className={appSt.rowSelected}>
          <img src={arrowRight} width={24} height={24} />

          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium" weight="medium">
              Открыть Инвесткопилку
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Откройте счёт и наблюдайте за ростом вашего дерева
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.row}>
          <img src={clock} width={24} height={24} />

          <Typography.Text tag="p" defaultMargins={false} view="primary-medium" weight="medium" color="secondary">
            Пополнить счёт
          </Typography.Text>
        </div>
        <div className={appSt.row}>
          <img src={clock} width={24} height={24} />

          <Typography.Text tag="p" defaultMargins={false} view="primary-medium" weight="medium" color="secondary">
            Настроить автопополнение
          </Typography.Text>
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          className={appSt.btn}
          href="alfabank://investments/open_investments_account?type=INVESTBOX"
          onClick={() => window.gtag('event', 'openIK_4167')}
        >
          <div className={appSt.btnContainer}>
            <div>
              <Typography.Text color="primary-inverted" weight="medium" view="primary-medium" defaultMargins={false}>
                Открыть Инвесткопилку
              </Typography.Text>
            </div>
            <CDNIcon name="glyph_chevron-right_m" />
          </div>
        </ButtonMobile>
      </div>
    </>
  );
};
