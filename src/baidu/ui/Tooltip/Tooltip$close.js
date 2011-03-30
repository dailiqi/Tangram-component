/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Tooltip;
///import baidu.string.format;
///import baidu.dom.insertHTML;
///import baidu.ui.Button;

/**
 * 创建关闭按钮
 */
baidu.ui.Tooltip.extend({
    /**
     * 标题内容
     * @param {String} [options.headContent].
     */
    headContent: '',
    tplhead: '<div class="#{headClass}" id="#{id}">#{headContent}</div>'
});

baidu.ui.Tooltip.register(function(me) {
    me.addEventListener('onload', function() {
        var me = this,
            button;
        
        baidu.dom.insertHTML(me.getBody(), 'afterBegin', baidu.format(me.tplhead, {
            headClass: me.getClass('head'),
            id: me.getId('head')
        }));

        button = new baidu.ui.Button({
            content: me.headContent,
            onclick: function(){
                me.close();
            }
        });
        button.render(me.getId('head'));
    });
});
