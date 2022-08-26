const restProps = {};
const show = true;

const comp = (
  <>
  <div
    key='this-is-key'
    class={{aaa: false}}
    style={{ display: show ? 'initial' : 'none' }}
    data-show={show}
    arr={[]}
    {...restProps}
    {...{p1: ''}}
  >
    0{+show + 1}
  </div>
  <myComp.Title title={<div/>} />
  </>
);
