# 骑砍2 Cursor 模组项目

《骑马与砍杀 2：霸主》(Mount & Blade II: Bannerlord) C# 模组开发模板，用于在 Cursor 中编写和迭代模组代码。

## 项目结构

```
骑砍2cursor/
├── module/                    # 部署到游戏 Modules 目录的模组文件
│   ├── SubModule.xml
│   ├── bin/Win64_Shipping_Client/
│   ├── ModuleData/
│   └── GUI/
└── src/QiKan2Cursor/          # C# 源码与工程文件
    ├── QiKan2Cursor.csproj
    └── SubModule.cs
```

## 环境要求

- Windows（游戏仅支持 Windows）
- 《骑马与砍杀 2：霸主》已安装
- Visual Studio 2022 或 Rider（推荐 .NET Framework 4.7.2 Developer Pack）
- 可选：设置环境变量 `BANNERLORD_GAME_DIR` 指向游戏根目录

示例路径：

```
C:\Program Files (x86)\Steam\steamapps\common\Mount & Blade II Bannerlord
```

## 快速开始

### 1. 部署模组到游戏

将 `module/` 文件夹复制到游戏的 `Modules` 目录，并重命名为 `QiKan2Cursor`：

```
<游戏目录>/Modules/QiKan2Cursor/
```

### 2. 配置游戏路径

**方式 A（推荐）**：设置系统环境变量

```powershell
[System.Environment]::SetEnvironmentVariable(
  "BANNERLORD_GAME_DIR",
  "C:\Program Files (x86)\Steam\steamapps\common\Mount & Blade II Bannerlord",
  "User"
)
```

**方式 B**：编辑 `src/QiKan2Cursor/QiKan2Cursor.csproj`，将 `$(BANNERLORD_GAME_DIR)` 替换为你的游戏路径。

### 3. 编译

在 Visual Studio 中打开 `src/QiKan2Cursor/QiKan2Cursor.csproj`，选择 **Release** 配置并编译。

编译产物会自动输出到 `module/bin/Win64_Shipping_Client/QiKan2Cursor.dll`。

### 4. 在游戏中启用

1. 打开 Bannerlord 启动器
2. 进入 **单人游戏** → **Mods**
3. 勾选 **QiKan2Cursor**
4. 启动游戏，主菜单会出现 **Hello Cursor** 按钮

## 开发说明

- 模组入口类：`QiKan2Cursor.SubModule`（继承 `MBSubModuleBase`）
- 修改 `SubModule.xml` 可调整模组元数据与依赖
- `ModuleData/` 用于放置 XML 数据（物品、兵种、文化等）
- 官方文档：[Bannerlord Modding Docs](https://moddocs.bannerlord.com/)
- 社区文档：[Bannerlord-Modding/Documentation](https://github.com/Bannerlord-Modding/Documentation)

## 常用启动参数（调试）

```
/singleplayer _MODULES_*Native*SandBoxCore*CustomBattle*SandBox*StoryMode*QiKan2Cursor*_MODULES_
```
