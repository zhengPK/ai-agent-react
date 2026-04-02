import { useEffect, useLayoutEffect } from 'react';

export function useMounted(handleMounted: () => void) {
  useEffect(() => {
    // Promise.resolve()的作用是防止handleMounted执行的时候，出现报错
    Promise.resolve().then(() => {
      handleMounted();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
/* 

useEffect(()=>{
    里面无法执行async 所以使用上面的useMounted
})

*/

// 清理副作用
export function useBeforeUnmount(handleUnmount: () => void) {
  useLayoutEffect(() => {
    return () => {
      handleUnmount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
