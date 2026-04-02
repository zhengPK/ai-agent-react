import { useParams } from 'react-router';
import { useMounted } from '../../uses/useMounted';
import { useState } from 'react';
import { Spin, Alert } from 'antd';
import { getErrorMessage } from '../../utils/showError';
export default function DynamicPage(props: { dirname: string }) {
  const params = useParams();
  const [PageComponent, setPageComponent] = useState<any | null>(null);
  const [error, setError] = useState<null | string>(null);
  const routeName: string = [params.name, params['*']].filter((i) => !!i?.trim().length).join('/');
  useMounted(async () => {
    try {
      const FileModule = await import('../../' + props.dirname + '/' + routeName + '-page');
      setPageComponent(() => FileModule.default);
    } catch (error) {
      setError(getErrorMessage(error));
    }
  });
  return (
    <div>
      {!!error ? (
        <Alert description={error} type="error" />
      ) : !!PageComponent ? (
        <PageComponent />
      ) : (
        <Spin />
      )}
    </div>
  );
}
