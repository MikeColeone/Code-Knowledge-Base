# github推动送节点不显示贡献块问题

1. 在git bash界面使用git log 查看提交记录发现用户名和用户邮箱不是github绑定的邮箱，github无法识别是你的贡献

   - 解决方法：

     1. 配置全局或者当前仓库的用户名以及邮箱（此时其实已经解决问题）
     2. 拿到之前的贡献(注意修改的时候不加大括号)，修改成功（Ref 'refs/heads/master' was rewritten） 在当前仓库再做一此提交（此时一般要执行强制推送，因为github无法判断你为原来的用户，因为用户名和邮箱发生了改变）

        ```
        git filter-branch -f --env-filter "
        GIT_AUTHOR_NAME='{new name}';
        GIT_AUTHOR_EMAIL='{new email}';
        GIT_COMMITTER_NAME='{new name}';
        GIT_COMMITTER_EMAIL='{new email}'
        " HEAD``
        ```
2. 强制推送可能导致覆盖他人工作节点，强推的时候检查是否有他人推送： git push --force-with-lease
