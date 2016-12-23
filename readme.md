# 乱弹

## 如何使用


## 基本原理

在页面引入`主脚本`，`主脚本`执行后，在`入口`节点中创建`iframe`，再在其中创建评论表单、评论列表和相关样式。

最后，所有脚本执行完毕后生成的`DOM`树结构为：
```HTML

<!--入口-->
<div id="luantan">
  <div data-reactroot="">
    <!--iframe-->
    <iframe scrolling="false" horizontalscrolling="no" verticalscrolling="no">
      <html>
        <head> 
          <link rel="stylesheet" type="text/css" href="">
        </head>
        <body>
          <div><!--comment form--></div>
          <div><!--comment list--></div>
        </body>
      </html>
    </iframe>
  </div>
</div>

<!--主脚本-->
<script src="./luantan.js"></script>
```
