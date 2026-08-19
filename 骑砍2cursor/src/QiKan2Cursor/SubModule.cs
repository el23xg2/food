using TaleWorlds.Library;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

namespace QiKan2Cursor
{
    public class SubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();

            Module.CurrentModule.AddInitialStateOption(new InitialStateOption(
                "QiKan2CursorHello",
                new TextObject("Hello Cursor", null),
                9990,
                () =>
                {
                    InformationManager.DisplayMessage(
                        new InformationMessage("骑砍2 Cursor 模组已加载！"));
                },
                () => (false, null)));
        }
    }
}
