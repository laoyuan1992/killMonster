require=function r(i,s,c){function l(e,t){if(!s[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(u)return u(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var a=s[e]={exports:{}};i[e][0].call(a.exports,function(t){return l(i[e][1][t]||t)},a,a.exports,r,i,s,c)}return s[e].exports}for(var u="function"==typeof require&&require,t=0;t<c.length;t++)l(c[t]);return l}({"BaseRank.ts":[function(t,e,n){"use strict";cc._RF.push(e,"c49447wkOJNfLDmd8/EN45D","BaseRank.ts"),Object.defineProperty(n,"__esModule",{value:!0});var o=cc._decorator,a=o.ccclass,r=(o.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._selfInfo=null,t}return __extends(t,e),t.prototype.getRankType=function(){return-1},t.prototype.refresh=function(t){this.refreshData(t)},t.prototype.refreshData=function(t){},t=__decorate([a],t)}(cc.Component));n.default=r,cc._RF.pop()},{}],BgSetting:[function(t,e,n){"use strict";cc._RF.push(e,"7f748ByMuJCXYTvYEvf8MJ1","BgSetting"),Object.defineProperty(n,"__esModule",{value:!0});var o=cc._decorator,a=o.ccclass,r=(o.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.start=function(){var t=cc.view.getVisibleSize(),e=this.node.getContentSize();this.node.scaleX=t.width/e.width,this.node.scaleY=t.height/e.height,this.node.position=cc.p(0,0)},e=__decorate([a],e)}(cc.Component));n.default=r,cc._RF.pop()},{}],CommonUtil:[function(t,e,n){"use strict";cc._RF.push(e,"3185d4x1lBNvYNogkjvCysZ","CommonUtil"),Object.defineProperty(n,"__esModule",{value:!0});var a=t("./WxShortCut"),o=cc._decorator,r=o.ccclass,i=(o.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.fitScreen=function(){var t=cc.director.getScene().getComponentInChildren(cc.Canvas),e=cc.view.getVisibleSize();e.width/e.height<9/16?(t.fitWidth=!0,t.fitHeight=!1):(t.fitWidth=!1,t.fitHeight=!0)},e.bubbleSort=function(t){for(var e=t.length,n=0;n<e;n++)for(var o=0;o<e-1-n;o++)if(t[o].KVDataList[0].value<t[o+1].KVDataList[0].value){var a=t[o+1];t[o+1]=t[o],t[o]=a}},e.trimRankData=function(t){var n=[];return t.forEach(function(e){if(e.KVDataList[0]&&e.KVDataList[0].key&&e.KVDataList[0].value&&e.KVDataList[0].value+""!="NaN"&&e.KVDataList[0].value+""!="null"){try{e.KVDataList[0].value=parseInt(e.KVDataList[0].value),isNaN(e.KVDataList[0].value)&&(e.KVDataList[0].value=0)}catch(t){e.KVDataList[0].value=0}n.push(e)}}),n},e.setSprite=function(t,e){var n=null;if(t instanceof cc.Sprite?n=t:t instanceof cc.Node&&(n=t.getComponent(cc.Sprite)),!n)throw new Error("CommonUtil.setSprite:  无法找到正确的Sprite");var o=a.default.createImage();o.onload=function(){var t=new cc.Texture2D;t.initWithElement(o),t.handleLoadedTexture(),n.spriteFrame=new cc.SpriteFrame(t)},o.src=e},e=__decorate([r],e)}(cc.Component));n.default=i,cc._RF.pop()},{"./WxShortCut":"WxShortCut"}],Consts:[function(t,e,n){"use strict";cc._RF.push(e,"d6d91nad/lO67DdduKsFAH7","Consts"),Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(){}return t.RANK_LIST_KEY="score",t}();n.default=o,cc._RF.pop()},{}],ERankType:[function(t,e,n){"use strict";cc._RF.push(e,"7ed5fOxkDBD9bdQdWUiGSu5","ERankType"),Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(){}return t.GroupList=0,t.FriendList=1,t.ResultList=2,t.Surpass=3,t.WillSurpass=4,t}();n.default=o,cc._RF.pop()},{}],FriendRank:[function(t,e,n){"use strict";cc._RF.push(e,"6cb25rbpKhL5Yh++Vh8VJ4m","FriendRank"),Object.defineProperty(n,"__esModule",{value:!0});var o=t("./RankItem"),a=t("./BaseRank.ts"),r=t("./WxShortCut"),i=t("./ERankType"),s=t("./GameData"),c=cc._decorator,l=c.ccclass,u=c.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loading=null,t.titleList=[],t.itemPrefab=null,t.myRnak=null,t.noSelfRankTip=null,t._myAvatarUrl="",t._selfInfo=null,t.rankRoot=null,t}return __extends(t,e),t.prototype.getRankType=function(){return i.default.FriendList},t.prototype.refreshData=function(t){var e=this;this._initRankList(),this.loading.active=!0,this.titleList=t.titleList,s.default.getFriendList(!0,function(t){e.loading.active=!1,e._getSelfInfoAndRefresh(t),e._refresh(t)})},t.prototype._initRankList=function(){this.rankRoot.removeAllChildren(!0),this.myRnak.node.active=!1,this.noSelfRankTip.active=!1},t.prototype._refresh=function(t){this.rankRoot.removeAllChildren(!0);for(var e=0;e<t.length;e++){var n=cc.instantiate(this.itemPrefab);n.parent=this.rankRoot,n.getComponent("RankItem").refresh(t[e],e+1,this.titleList)}},t.prototype._refreshSelf=function(t){if(this._selfInfo){for(var e=0;e<Math.min(t.length,100);e++)if(t[e].nickname==this._selfInfo.nickName)return this._showSelfNode(!0),void this.myRnak.refresh(t[e],e+1,this.titleList);this._showSelfNode(!1)}else this._showSelfNode(!1)},t.prototype._getSelfInfoAndRefresh=function(t){var e=this;this._selfInfo?this._refreshSelf(t):r.default.getUserInfo({openIdList:["selfOpenId"],lang:"zh_CN",success:function(t){console.log("获取个人信息成功！",t);try{e._selfInfo={avatarUrl:t.data[0].avatarUrl,nickName:t.data[0].nickName}}catch(t){console.log("已获取到角色信息，但并没有角色头像及昵称等个人信息！！！"),e._selfInfo=null}},complete:function(){console.log("获取个人信息完成"),e._refreshSelf(t)}})},t.prototype._showSelfNode=function(t){this.myRnak.node.active=t,this.noSelfRankTip.active=!t},__decorate([u(cc.Node)],t.prototype,"loading",void 0),__decorate([u(cc.Prefab)],t.prototype,"itemPrefab",void 0),__decorate([u(o.default)],t.prototype,"myRnak",void 0),__decorate([u(cc.Node)],t.prototype,"noSelfRankTip",void 0),__decorate([u(cc.Node)],t.prototype,"rankRoot",void 0),t=__decorate([l],t)}(a.default);n.default=p,cc._RF.pop()},{"./BaseRank.ts":"BaseRank.ts","./ERankType":"ERankType","./GameData":"GameData","./RankItem":"RankItem","./WxShortCut":"WxShortCut"}],GameData:[function(t,e,n){"use strict";cc._RF.push(e,"8ce4eMe9ZNNa6zIzcy2eruQ","GameData"),Object.defineProperty(n,"__esModule",{value:!0});var a=t("./Consts"),r=t("./CommonUtil"),i=t("./WxShortCut"),o=function(){function t(){}return t.getSelfInfo=function(t){var e=this;this.selfInfo?t(this.selfInfo):i.default.getUserInfo({openIdList:["selfOpenId"],lang:"zh_CN",success:function(t){console.log("获取个人信息成功！",t);try{e.selfInfo={avatarUrl:t.data[0].avatarUrl,nickName:t.data[0].nickName}}catch(t){e.selfInfo=null}},complete:function(){console.log("获取个人信息完成"),t(e.selfInfo)}})},t.getFriendList=function(t,e){var n=this;void 0===t&&(t=!1),void 0===e&&(e=null),this.friendList&&!t?e(this.friendList):i.default.getFriendCloudStorage({keyList:[a.default.RANK_LIST_KEY],success:function(t){var e;e=r.default.trimRankData(t.data),r.default.bubbleSort(e),n.friendList=e},fail:function(t){return console.log("获取排行失败.  详细信息：\n",t)},complete:function(t){console.log("获取好友排行完成,",t),e&&e(n.friendList)}})},t.getGroupList=function(t,e,n){var o=this;void 0===e&&(e=!1),this.groupList&&!e?n(this.groupList):i.default.getGroupCloudStorage({shareTicket:t,keyList:[a.default.RANK_LIST_KEY],success:function(t){var e;e=r.default.trimRankData(t.data),r.default.bubbleSort(e),o.groupList=e},fail:function(t){return console.log("获取排行失败.  详细信息：\n",t)},complete:function(t){console.log("获取群排行完成,",t),n&&n(o.groupList)}})},t.selfInfo=null,t.groupList=null,t.friendList=null,t}();n.default=o,cc._RF.pop()},{"./CommonUtil":"CommonUtil","./Consts":"Consts","./WxShortCut":"WxShortCut"}],GroupRank:[function(t,e,n){"use strict";cc._RF.push(e,"4cca4PArAZCXIZphocMezF0","GroupRank"),Object.defineProperty(n,"__esModule",{value:!0});var o=t("./BaseRank.ts"),a=t("./ERankType"),r=t("./GameData"),i=cc._decorator,s=i.ccclass,c=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.titleList=[],t.loading=null,t.groupRankRoot=null,t.itemPrefab=null,t}return __extends(t,e),t.prototype.getRankType=function(){return a.default.GroupList},t.prototype.refreshData=function(t){var e=this;this.titleList=t.titleList,this.groupRankRoot.removeAllChildren(!0),this.loading.active=!0;r.default.getGroupList(t.shareTicket,!0,function(t){e.loading.active=!1,e.showGroudRank(t)})},t.prototype.showGroudRank=function(t){if(t){this.groupRankRoot.removeAllChildren(!0);for(var e=0;e<t.length;e++){var n=cc.instantiate(this.itemPrefab);n.parent=this.groupRankRoot,n.getComponent("RankItem").refresh(t[e],e+1,this.titleList)}}},__decorate([c(cc.Node)],t.prototype,"loading",void 0),__decorate([c(cc.Node)],t.prototype,"groupRankRoot",void 0),__decorate([c(cc.Prefab)],t.prototype,"itemPrefab",void 0),t=__decorate([s],t)}(o.default);n.default=l,cc._RF.pop()},{"./BaseRank.ts":"BaseRank.ts","./ERankType":"ERankType","./GameData":"GameData"}],RankItem:[function(t,e,n){"use strict";cc._RF.push(e,"ccc07dqARhJSpEfvyiUkdZh","RankItem"),Object.defineProperty(n,"__esModule",{value:!0});var a=t("./CommonUtil"),o=cc._decorator,r=o.ccclass,i=o.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rankLabel=null,t.portrait=null,t.friendName=null,t.score=null,t.titleRoot=null,t.titleName=null,t.middleBg=null,t.rightBg=null,t}return __extends(t,e),t.prototype.refresh=function(t,e,n){var o=t.nickname;6<o.length&&(o=o.substring(0,6)+"..."),this.node.active=!0,this.rankLabel.string=e+"",this.friendName.string=o,this.score.string=t.KVDataList[0].value,n?(this.titleName.string=this.getTitleName(t.KVDataList[0].value,n),this.titleRoot.active=!0,this.rescaleBg()):this.titleRoot.active=!1,t.avatarUrl&&a.default.setSprite(this.portrait,t.avatarUrl+"?file=a.jpg")},t.prototype.rescaleBg=function(){var t=this.titleName.node.width;this.middleBg.width=t,this.rightBg.position=cc.p(t,0)},t.prototype.getTitleName=function(e,t){if(!t)return"";var n=t.filter(function(t){return t.score<=e});return n[n.length-1].title},__decorate([i(cc.Label)],t.prototype,"rankLabel",void 0),__decorate([i(cc.Sprite)],t.prototype,"portrait",void 0),__decorate([i(cc.Label)],t.prototype,"friendName",void 0),__decorate([i(cc.Label)],t.prototype,"score",void 0),__decorate([i(cc.Node)],t.prototype,"titleRoot",void 0),__decorate([i(cc.Label)],t.prototype,"titleName",void 0),__decorate([i(cc.Node)],t.prototype,"middleBg",void 0),__decorate([i(cc.Node)],t.prototype,"rightBg",void 0),t=__decorate([r],t)}(cc.Component);n.default=s,cc._RF.pop()},{"./CommonUtil":"CommonUtil"}],ResultRankItem:[function(t,e,n){"use strict";cc._RF.push(e,"6f36bBKOsNPUJ66wuwVGsSk","ResultRankItem"),Object.defineProperty(n,"__esModule",{value:!0});var a=t("./CommonUtil"),o=cc._decorator,r=o.ccclass,i=o.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rankIndex=null,t.portrait=null,t.nameLabel=null,t.score=null,t}return __extends(t,e),t.prototype.refresh=function(t,e,n){var o=t.nickname;4<o.length&&(o=o.substring(0,4)+"..."),this.node.active=!0,this.rankIndex.string=e+"",this.nameLabel.string=o,this.score.string=t.KVDataList[0].value,t.avatarUrl&&a.default.setSprite(this.portrait,t.avatarUrl+"?file=a.jpg")},t.prototype.getTitleName=function(e,t){if(!t)return"";var n=t.filter(function(t){return t.score<=e});return n[n.length-1].title},__decorate([i(cc.Label)],t.prototype,"rankIndex",void 0),__decorate([i(cc.Sprite)],t.prototype,"portrait",void 0),__decorate([i(cc.Label)],t.prototype,"nameLabel",void 0),__decorate([i(cc.Label)],t.prototype,"score",void 0),t=__decorate([r],t)}(cc.Component);n.default=s,cc._RF.pop()},{"./CommonUtil":"CommonUtil"}],ResultRank:[function(t,e,n){"use strict";cc._RF.push(e,"6f18c3PsDxP170Z9pTkJ4fA","ResultRank"),Object.defineProperty(n,"__esModule",{value:!0});var o=t("./BaseRank.ts"),a=t("./Consts"),r=t("./CommonUtil"),i=t("./ResultRankItem"),s=t("./WxShortCut"),c=t("./ERankType"),l=cc._decorator,u=l.ccclass,p=l.property,f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.endRankItem=null,t.rankRoot=null,t}return __extends(t,e),t.prototype.getRankType=function(){return c.default.ResultList},t.prototype.refreshData=function(t){var n=this;this._initGameEndRankLisk(),s.default.getFriendCloudStorage({keyList:[a.default.RANK_LIST_KEY],success:function(t){var e;e=r.default.trimRankData(t.data),r.default.bubbleSort(e),n._getSelfInfoAndRefresh(e)},fail:function(t){return console.log("获取排行失败.  详细信息：\n",t)},complete:function(t){return console.log("获取排行完成,",t)}})},t.prototype._initGameEndRankLisk=function(){this.rankRoot.removeAllChildren(!0)},t.prototype.ShowGameEndRank=function(t){this._initGameEndRankLisk();for(var e=0,n=0;n<Math.min(t.length,100);n++)if(t[n]&&t[n].nickname==this._selfInfo.nickName){e=n;break}this.RefreshGameEndRank(e,t)},t.prototype.RefreshGameEndRank=function(t,e){var n=t-1;t>=e.length-1&&3<=e.length&&(n=t-2),-1==n&&(n=0);for(var o=0,a=n;a<n+3;a++)if(e[a]){var r=cc.instantiate(this.endRankItem);r.parent=this.rankRoot,r.position=cc.p(160*o++-160),r.getComponent(i.default).refresh(e[a],a+1,2)}},t.prototype._getSelfInfoAndRefresh=function(t){var e=this;this._selfInfo?this.ShowGameEndRank(t):s.default.getUserInfo({openIdList:["selfOpenId"],lang:"zh_CN",success:function(t){console.log("获取个人信息成功！",t);try{e._selfInfo={avatarUrl:t.data[0].avatarUrl,nickName:t.data[0].nickName}}catch(t){console.log("已获取到角色信息，但并没有角色头像及昵称等个人信息！！！"),e._selfInfo=null}},complete:function(){console.log("获取个人信息完成"),e.ShowGameEndRank(t)}})},__decorate([p(cc.Prefab)],t.prototype,"endRankItem",void 0),__decorate([p(cc.Node)],t.prototype,"rankRoot",void 0),t=__decorate([u],t)}(o.default);n.default=f,cc._RF.pop()},{"./BaseRank.ts":"BaseRank.ts","./CommonUtil":"CommonUtil","./Consts":"Consts","./ERankType":"ERankType","./ResultRankItem":"ResultRankItem","./WxShortCut":"WxShortCut"}],RotateLoading:[function(t,e,n){"use strict";cc._RF.push(e,"f3166l3UFNAUZfmUVHifrdW","RotateLoading"),Object.defineProperty(n,"__esModule",{value:!0});var o=cc._decorator,a=o.ccclass,r=(o.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.start=function(){this.schedule(function(){this.node.rotation+=40},.1)},e=__decorate([a],e)}(cc.Component));n.default=r,cc._RF.pop()},{}],Scene_RankList:[function(t,e,n){"use strict";cc._RF.push(e,"555d9b9cVNEBaJwUVYQEz16","Scene_RankList"),Object.defineProperty(n,"__esModule",{value:!0});var o=t("./BaseRank.ts"),a=t("./CommonUtil"),r=t("./WxShortCut"),i=cc._decorator,s=i.ccclass,c=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ranks=[],t}return __extends(t,e),t.prototype.start=function(){var t=this;a.default.fitScreen(),r.default.onMessage(function(e){if(e.rankType>=t.ranks.length)throw"rankType错误 无法显示应用域  rankType:"+e.rankType;t.ranks.forEach(function(t){t.node.active=t.getRankType()==e.rankType,t.getRankType()==e.rankType&&t.refresh(e)})})},__decorate([c(o.default)],t.prototype,"ranks",void 0),t=__decorate([s],t)}(cc.Component);n.default=l,cc._RF.pop()},{"./BaseRank.ts":"BaseRank.ts","./CommonUtil":"CommonUtil","./WxShortCut":"WxShortCut"}],SurpassRank:[function(t,e,n){"use strict";cc._RF.push(e,"78b4f9vq/JJ3JG/p3s6Tbh4","SurpassRank"),Object.defineProperty(n,"__esModule",{value:!0});var o=t("./GameData"),a=t("./CommonUtil"),r=t("./BaseRank.ts"),i=t("./ERankType"),s=cc._decorator,c=s.ccclass,l=(s.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.groupData=null,t.selfInfo=null,t._lastScore=0,t}return __extends(t,e),t.prototype.onLoad=function(){var e=this;o.default.getSelfInfo(function(t){return e.selfInfo=t}),o.default.getFriendList(!1,function(t){return e.groupData=t}),this.node.children[0].active=!1},t.prototype.getRankType=function(){return i.default.Surpass},t.prototype.refreshData=function(t){if(this.node.children[0].active=!1,this.groupData&&this.selfInfo&&t.score)for(var e=this.groupData.length-1;0<=e;e--){var n=this.groupData[e];if(n.nickname!=this.selfInfo.nickName){var o=n.KVDataList[0].value;if(t.score<=o)return;this.node.children[0].position=cc.p(t.x,t.y),this._lastScore<=o&&(this._lastScore=t.score,this.showSurpass(n))}}},t.prototype.showSurpass=function(t){var e=this.node.children[0];e.active=!0,t.avatarUrl&&a.default.setSprite(e.getChildByName("s_portrait"),t.avatarUrl+"?file=a.jpg"),e.getChildByName("l_name").getComponent(cc.Label).string=t.nickname,this.scheduleOnce(function(){e.active=!1},2)},t=__decorate([c],t)}(r.default));n.default=l,cc._RF.pop()},{"./BaseRank.ts":"BaseRank.ts","./CommonUtil":"CommonUtil","./ERankType":"ERankType","./GameData":"GameData"}],WillSurpassRank:[function(t,e,n){"use strict";cc._RF.push(e,"1e3edvGwGVBVaj+R2UmilnN","WillSurpassRank"),Object.defineProperty(n,"__esModule",{value:!0});var o=t("./BaseRank.ts"),a=t("./ERankType"),r=t("./GameData"),i=t("./CommonUtil"),s=cc._decorator,c=s.ccclass,l=s.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.portrait=null,t.firendName=null,t.score=null,t.willSurpassScore=-1,t}return __extends(t,e),t.prototype.onDisable=function(){this.willSurpassScore=-1},t.prototype.getRankType=function(){return a.default.WillSurpass},t.prototype.refreshData=function(t){var n=this;this.node.position=cc.p(this.node.position.x,t.y||430);var o=t.score;o<=this.willSurpassScore||r.default.getFriendList(!1,function(t){if(t&&t.length){if(o>t[0].KVDataList[0].value)n.node.active=!1;else if(1==t.length)o<=t[0].KVDataList[0].value&&n._refresh(t[0]);else if(2<=t.length&&o<=t[t.length-1].KVDataList[0].value)n._refresh(t[t.length-1]);else for(var e=0;e<t.length-1;e++)if(t[e].KVDataList[0].value>=o&&t[e+1].KVDataList[0].value<o){n._refresh(t[e]);break}}else n.node.active=!1})},t.prototype._refresh=function(t){i.default.setSprite(this.portrait,t.avatarUrl+"?file=a.jpg"),this.firendName.string=t.nickname,this.score.string=t.KVDataList[0].value+"",this.willSurpassScore=t.KVDataList[0].value},__decorate([l(cc.Sprite)],t.prototype,"portrait",void 0),__decorate([l(cc.Label)],t.prototype,"firendName",void 0),__decorate([l(cc.Label)],t.prototype,"score",void 0),t=__decorate([c],t)}(o.default);n.default=u,cc._RF.pop()},{"./BaseRank.ts":"BaseRank.ts","./CommonUtil":"CommonUtil","./ERankType":"ERankType","./GameData":"GameData"}],WxShortCut:[function(t,e,n){"use strict";cc._RF.push(e,"aa890hW65pAd7Mj9ZO+8VAJ","WxShortCut"),Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(){}return t.getUserInfo=function(t){return wx.getUserInfo(t)},t.getFriendCloudStorage=function(t){return wx.getFriendCloudStorage(t)},t.getGroupCloudStorage=function(t){return wx.getGroupCloudStorage(t)},t.onMessage=function(t){return wx.onMessage(t)},t.createImage=function(){return wx.createImage()},t}();n.default=o,cc._RF.pop()},{}]},{},["BaseRank.ts","BgSetting","CommonUtil","Consts","ERankType","FriendRank","GameData","GroupRank","RankItem","ResultRank","ResultRankItem","RotateLoading","Scene_RankList","SurpassRank","WillSurpassRank","WxShortCut"]);