// Created by iWeb 3.0.1 local-build-20101111

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="461" height="361" style="height: 361px; left: 32px; position: absolute; top: 483px; width: 461px; z-index: 1; "><param name="src" value="../../../../Media/ScreenFlow.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="461" height="361" style="height: 361px; left: 32px; position: absolute; top: 483px; width: 461px; z-index: 1; "><param name="src" value="31_View_the_contents_files/ScreenFlow-1.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/ScreenFlow.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="461" height="361" data="../../../../Media/ScreenFlow.mov" style="height: 361px; left: 32px; position: absolute; top: 483px; width: 461px; z-index: 1; "><param name="src" value="../../../../Media/ScreenFlow.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_01.png'),IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_02.png'),IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_03.png'),IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_06.png'),IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_09.png'),IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_08.png'),IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_07.png'),IWCreateImage('31_View_the_contents_files/PrintedPaper_frame_04.png')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,6.000000,6.000000,6.000000,6.000000,9.000000,9.000000,9.000000,9.000000,null,null,null,0.500000),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('31_View_the_contents_files/31_View_the_contentsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');fixAllIEPNGs('../../../../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();BlogFixupPreviousNext();applyEffects()}
function onPageUnload()
{Widget.onunload();}
