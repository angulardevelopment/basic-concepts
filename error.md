    
This JSX tag requires 'React' to be in scope, but it could not be found.ts(2874)	
import React, { Component }  from 'react';

Cannot use JSX unless the '--jsx' flag is provided.ts(17004)
{
  "compilerOptions": {
    "jsx": "react" // or "react-native"
  }
}

https://angular.dev/errors/NG05104
Root element was not found
<html>
    <my-app></my-app> <!-- OK -->
</html>

https://v17.angular.io/errors/NG0201
NG0201: No provider for {token} found
imprort relevant modules
