import './widget-align.styles.scss';

const buttonTypes = ['right', 'left', 'top', 'bottom'];

const WidgetAlign = ({ selected, buttonClickHandler }) => {

  return (
    <div className="widget-align">
      {
        buttonTypes.map(txt => (
          <button className={selected === txt ? 'selected' : ''} onClick={buttonClickHandler} key={txt}>{txt}</button>)
        )
      }
    </div>
  )
}

export default WidgetAlign;
