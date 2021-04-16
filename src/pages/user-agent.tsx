import React, { useEffect, useState } from 'react';
import UA from 'ua-device';

interface Result {
  browser: any;
  os: any;
  device: any;
}

const UserAgent: React.FC = () => {
  const [result, setResult] = useState<Result>({ browser: null, os: null, device: null });

  useEffect(() => {
    window.utools.onPluginEnter(({ code, type, payload, optional }) => {
      setResult(new UA(payload));
    });
  }, []);

  return (
    <div>
      {result.browser && (
        <ul>
          <li>
            浏览器:{result.browser.name}-{result.browser.version.original}
          </li>
          <li>
            操作系统:{result.os.name}
            {result.os.version.original}
          </li>
          <li>硬件:{result.device.type}</li>
        </ul>
      )}
    </div>
  );
};

export default UserAgent;
