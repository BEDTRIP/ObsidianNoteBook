---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: false
    sortIndex: 2
    width: 117
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  __tasks__:
    key: __tasks__
    id: __tasks__
    input: task
    label: Task
    accessorKey: __tasks__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: false
    position: 2
    isHidden: true
    sortIndex: -1
    width: -232
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Ссылка:
    input: text
    accessorKey: Ссылка
    key: Ссылка
    id: Ссылка
    label: Ссылка
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 88
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  О_чем?:
    input: text
    accessorKey: О_чем?
    key: О_чем?
    id: О_чем?
    label: О чем?
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 191
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Источник:
    input: text
    accessorKey: Источник
    key: Источник
    id: Источник
    label: Источник
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  tags:
    input: tags
    accessorKey: tags
    key: tags
    id: tags
    label: tags
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "selfimpovement", value: "selfimpovement", color: "hsl(273, 95%, 90%)"}
      - { label: "video", value: "video", color: "hsl(259, 95%, 90%)"}
      - { label: "infosec", value: "infosec", color: "hsl(119, 95%, 90%)"}
      - { label: "tool", value: "tool", color: "hsl(17, 95%, 90%)"}
      - { label: "game", value: "game", color: "hsl(156, 95%, 90%)"}
      - { label: "course", value: "course", color: "hsl(36, 95%, 90%)"}
      - { label: "it", value: "it", color: "hsl(129, 95%, 90%)"}
      - { label: "linux", value: "linux", color: "hsl(257, 95%, 90%)"}
      - { label: "ctf", value: "ctf", color: "hsl(179, 95%, 90%)"}
      - { label: "book", value: "book", color: "hsl(316, 95%, 90%)"}
      - { label: "python", value: "python", color: "hsl(134, 95%, 90%)"}
      - { label: "article", value: "article", color: "hsl(31, 95%, 90%)"}
      - { label: "health", value: "health", color: "hsl(302, 95%, 90%)"}
      - { label: "psyop", value: "psyop", color: "hsl(126, 95%, 90%)"}
      - { label: "#input/telegram", value: "#input/telegram", color: "hsl(56, 95%, 90%)"}
      - { label: "#input/manual", value: "#input/manual", color: "hsl(116, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: true
  cell_size: normal
  sticky_first_column: true
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: true
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 200
  font_size: 13
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```