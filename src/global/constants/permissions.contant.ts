export const enum PERMISSIONS {
  // auth
  auth = 'auth',
  change_password = 'change_password',
  update_phone_number = 'update_phone_number',
  update_profile = 'update_profile',
  update_profile_image = 'update_profile_image',
  find_users = 'find_users',
  update_users = 'update_users',
  create_nested_user = 'create_nested_user',
  find_users_crm = 'find_users_crm',
  update_users_crm = 'update_users_crm',

  // user permissions
  read_profile = 'read_profile',
  create_user = 'create_user',
  read_user = 'read_user',
  update_user = 'update_user',
  delete_user = 'delete_user',
  block_user = 'block_user',
  update_user_image = 'update_user_image',
  // warehouse permissions
  create_warehouse = 'create_warehouse',
  read_warehouse = 'read_warehouse',
  update_warehouse = 'update_warehouse',
  delete_warehouse = 'delete_warehouse',
  // stock
  create_stock = 'create_stock',
  read_stock = 'read_stock',
  update_stock = 'update_stock',
  delete_stock = 'delete_stock',
  // perfumer permissions
  create_perfumer = 'create_perfumer',
  read_perfumer = 'read_perfumer',
  update_perfumer = 'update_perfumer',
  delete_perfumer = 'delete_perfumer',

  // promocode permissions
  create_promocode = 'create_promocode',
  update_promocode = 'update_promocode',
  delete_promocode = 'delete_promocode',
  find_promocodes = 'find_promocodes',
  find_active_promocodes = 'find_active_promocodes',
  validate_promocode = 'validate_promocode',
  use_promocode = 'use_promocode',
  get_promocode_usage_stats = 'get_promocode_usage_stats',

  // contract permissions
  create_contract = 'create_contract',
  read_contract = 'read_contract',
  update_contract = 'update_contract',
  delete_contract = 'delete_contract',
  record_payment = 'record_payment',
  update_contract_status = 'update_contract_status',
  read_my_contracts = 'read_my_contracts',
  approve_contract = 'approve_contract',
  cancel_contract = 'cancel_contract',
  complete_contract = 'complete_contract',

  // product permissions
  create_product = 'create:product',
  read_product = 'read:product',
  update_product = 'update:product',
  delete_product = 'delete:product',
  read_product_for_website = 'read_product_for_website',
  // order permissions
  create_order = 'create_order',
  update_order = 'update_order',
  delete_order = 'delete_order',
  create_order_item = 'create_order_item',
  read_order_item = 'read_order_item',
  update_order_item = 'update_order_item',
  delete_order_item = 'delete_order_item',
  create_order_status = 'create_order_status',
  read_order_status = 'read_order_status',
  update_order_status = 'update_order_status',
  delete_order_status = 'delete_order_status',
  create_order_payment = 'create_order_payment',
  read_order_payment = 'read_order_payment',
  update_order_payment = 'update_order_payment',
  delete_order_payment = 'delete_order_payment',
  find_my_orders = 'find_my_orders',
  find_orders = 'find_orders',

  // payment permissions
  create_payment = 'create_payment',
  read_payment = 'read_payment',
  update_payment = 'update_payment',
  delete_payment = 'delete_payment',

  // invoice permissions
  create_invoice = 'create_invoice',
  read_invoice = 'read_invoice',
  update_invoice = 'update_invoice',
  delete_invoice = 'delete_invoice',

  // purchase invoice permissions
  create_purchase_invoice = 'create_purchase_invoice',
  read_purchase_invoice = 'read_purchase_invoice',
  update_purchase_invoice = 'update_purchase_invoice',
  delete_purchase_invoice = 'delete_purchase_invoice',
  create_purchase_invoice_material = 'create_purchase_invoice_material',
  read_purchase_invoice_material = 'read_purchase_invoice_material',
  update_purchase_invoice_material = 'update_purchase_invoice_material',
  delete_purchase_invoice_material = 'delete_purchase_invoice_material',

  // report permissions
  generate_report = 'generate_report',
  read_report = 'read_report',
  update_report = 'update_report',
  delete_report = 'delete_report',

  // notification permissions
  create_notification = 'create_notification',
  read_notification = 'read_notification',
  update_notification = 'update_notification',
  delete_notification = 'delete_notification',
  mark_notifications_read = 'mark_notifications_read',

  // email queue permissions
  bulmq_queue = 'bulmq_queue',
  create_email_queue = 'create_email_queue',
  send_email = 'send_email',
  read_email_queue = 'read_email_queue',
  remove_email_job = 'remove_email_job',
  pause_email_queue = 'pause_email_queue',
  resume_email_queue = 'resume_email_queue',
  clean_email_queue = 'clean_email_queue',

  // audit logger permissions
  audit_logs = 'audit_logs',
  read_audit_logs = 'read_audit_logs',

  // measurement permissions
  create_measurement = 'create_measurement',
  read_measurement = 'read_measurement',
  update_measurement = 'update_measurement',
  delete_measurement = 'delete_measurement',

  // material permissions
  create_material = 'create_material',
  read_material = 'read_material',
  update_material = 'update_material',
  delete_material = 'delete_material',

  // scent note permissions
  create_scent_note = 'create_scent_note',
  read_scent_note = 'read_scent_note',
  update_scent_note = 'update_scent_note',
  delete_scent_note = 'delete_scent_note',

  // attachment permissions
  create_attachment = 'create_attachment',
  upload_attachment = 'upload_attachment',
  read_attachment = 'read_attachment',
  update_attachment = 'update_attachment',
  delete_attachment = 'delete_attachment',

  // salary permissions
  create_salary = 'create_salary',
  read_salary = 'read_salary',
  update_salary = 'update_salary',
  delete_salary = 'delete_salary',
  bulk_delete_salary = 'bulk_delete_salary',
  read_my_salary = 'read_my_salary',

  // salary taxes permissions
  create_salary_taxes = 'create_salary_taxes',
  read_salary_taxes = 'read_salary_taxes',
  update_salary_taxes = 'update_salary_taxes',
  delete_salary_taxes = 'delete_salary_taxes',
  bulk_delete_salary_taxes = 'bulk_delete_salary_taxes',
  assign_salary_taxes = 'assign_salary_taxes',
  read_my_salary_taxes = 'read_my_salary_taxes',

  // salary history permissions
  create_salary_history = 'create_salary_history',
  read_salary_history = 'read_salary_history',
  update_salary_history = 'update_salary_history',
  delete_salary_history = 'delete_salary_history',
  bulk_delete_salary_history = 'bulk_delete_salary_history',
  read_my_salary_history = 'read_my_salary_history',

  // invoice taxes permissions
  create_invoice_taxes = 'create_invoice_taxes',
  read_invoice_taxes = 'read_invoice_taxes',
  update_invoice_taxes = 'update_invoice_taxes',
  delete_invoice_taxes = 'delete_invoice_taxes',

  // adjustment entities permissions
  create_adjustment_entities = 'create_adjustment_entities',
  read_adjustment_entities = 'read_adjustment_entities',
  update_adjustment_entities = 'update_adjustment_entities',
  delete_adjustment_entities = 'delete_adjustment_entities',

  // adjustment factors permissions
  create_adjustment_factors = 'create_adjustment_factors',
  read_adjustment_factors = 'read_adjustment_factors',
  update_adjustment_factors = 'update_adjustment_factors',
  delete_adjustment_factors = 'delete_adjustment_factors',

  // user adjustments permissions
  create_user_adjustments = 'create_user_adjustments',
  read_user_adjustments = 'read_user_adjustments',
  update_user_adjustments = 'update_user_adjustments',
  delete_user_adjustments = 'delete_user_adjustments',
  read_my_user_adjustments = 'read_my_user_adjustments',
  read_user_adjustments_stats = 'read_user_adjustments_stats',
  read_my_user_adjustments_stats = 'read_my_user_adjustments_stats',

  // user group permissions
  create_user_group = 'create_user_group',
  read_user_group = 'read_user_group',
  update_user_group = 'update_user_group',
  delete_user_group = 'delete_user_group',
  assign_users_to_group = 'assign_users_to_group',

  // permissions
  read_permissions = 'read_permissions',

  // role permissions
  create_role = 'create_role',
  read_role = 'read_role',
  update_role = 'update_role',

  delete_role = 'delete_role',

  // alert permissions
  create_alert = 'create_alert',
  read_alert = 'read_alert',
  update_alert = 'update_alert',
  delete_alert = 'delete_alert',
  mark_alert_as_acknowledged = 'mark_alert_as_acknowledged',

  // job hierarchy permissions
  add_member = 'add_member',
  remove_member = 'remove_member',
  reorder_member = 'reorder_member',
  move_member = 'move_member',
  replace_user = 'replace_user',
  replace_hierarchy = 'replace_hierarchy',
  read_hierarchy = 'read_hierarchy',

  // complaint permissions
  read_complaint = 'read_complaint',
  create_complaint = 'create_complaint',
  update_complaint = 'update_complaint',
  delete_complaint = 'delete_complaint',
  accept_complaint = 'accept_complaint',

  // complaint status permissions
  read_complaint_status = 'read_complaint_status',
  create_complaint_status = 'create_complaint_status',
  update_complaint_status = 'update_complaint_status',
  delete_complaint_status = 'delete_complaint_status',

  // complaint category permissions
  read_complaint_category = 'read_complaint_category',
  create_complaint_category = 'create_complaint_category',
  update_complaint_category = 'update_complaint_category',
  delete_complaint_category = 'delete_complaint_category',

  // complaint note permissions
  read_complaint_note = 'read_complaint_note',
  create_complaint_note = 'create_complaint_note',
  delete_complaint_note = 'delete_complaint_note',

  // complaint escalation permissions
  read_complaint_escalation = 'read_complaint_escalation',
  create_complaint_escalation = 'create_complaint_escalation',
  update_complaint_escalation = 'update_complaint_escalation',
  delete_complaint_escalation = 'delete_complaint_escalation',

  // comment permissions
  read_comment = 'read_comment',
  create_comment = 'create_comment',
  create_erb_comment = 'create_erb_comment',
  update_comment = 'update_comment',
  delete_comment = 'delete_comment',
  delete_erb_comment = 'delete_erb_comment',

  // rating permissions
  read_rating = 'read_rating',
  create_rating = 'create_rating',
  update_rating = 'update_rating',
  delete_rating = 'delete_rating',

  // blocked users permissions
  read_blocked_users = 'read_blocked_users',
  toggle_block_users = 'toggle_block_users',

  // task management permissions
  create_task = 'create_task',
  read_task = 'read_task',
  update_task = 'update_task',
  delete_task = 'delete_task',
  update_task_status = 'update_task_status',
  manage_task_status = 'manage_task_status',
  read_task_status = 'read_task_status',
  create_task_comment = 'create_task_comment',
  read_task_comment = 'read_task_comment',
  update_task_comment = 'update_task_comment',
  delete_task_comment = 'delete_task_comment',
  manage_task_watchers = 'manage_task_watchers',
  // blog
  blog = 'blog',
  create_blog = 'create_blog',
  update_blog = 'update_blog',
  remove_blog = 'remove_blog',
  find_blog = 'find_blog',
  find_published_blog = 'find_published_blog',
  // blog category
  blog_category = 'blog_category',
  create_blog_category = 'create_blog_category',
  update_blog_category = 'update_blog_category',
  remove_blog_category = 'remove_blog_category',
  find_blog_category = 'find_blog_category',
  add_to_cart = 'add_to_cart',
  remove_from_cart = 'remove_from_cart',
  update_cart_item = 'update_cart_item',
  get_cart = 'get_cart',
}

export const permissionData: Array<{ key: PERMISSIONS; module: string; title: string }> = [
  // Auth permissions
  { key: PERMISSIONS.auth, module: 'auth', title: 'Auth' },
  { key: PERMISSIONS.change_password, module: 'auth', title: 'Change Password' },
  { key: PERMISSIONS.update_phone_number, module: 'auth', title: 'Update Phone Number' },
  { key: PERMISSIONS.update_profile, module: 'auth', title: 'Update Profile' },
  { key: PERMISSIONS.update_profile_image, module: 'auth', title: 'Update Profile Image' },
  { key: PERMISSIONS.find_users, module: 'auth', title: 'Find Users' },
  { key: PERMISSIONS.update_users, module: 'auth', title: 'Update Users' },
  { key: PERMISSIONS.create_nested_user, module: 'auth', title: 'Create Nested User' },
  { key: PERMISSIONS.find_users_crm, module: 'auth', title: 'Find Users CRM' },
  { key: PERMISSIONS.update_users_crm, module: 'auth', title: 'Update Users CRM' },

  // User permissions
  { key: PERMISSIONS.read_profile, module: 'user', title: 'Read Profile' },
  { key: PERMISSIONS.create_user, module: 'user', title: 'Create User' },
  { key: PERMISSIONS.read_user, module: 'user', title: 'Read User' },
  { key: PERMISSIONS.update_user, module: 'user', title: 'Update User' },
  { key: PERMISSIONS.delete_user, module: 'user', title: 'Delete User' },
  { key: PERMISSIONS.block_user, module: 'user', title: 'Block User' },
  { key: PERMISSIONS.update_user_image, module: 'user', title: 'Update User Image' },

  // Warehouse permissions
  { key: PERMISSIONS.create_warehouse, module: 'warehouse', title: 'Create Warehouse' },
  { key: PERMISSIONS.read_warehouse, module: 'warehouse', title: 'Read Warehouse' },
  { key: PERMISSIONS.update_warehouse, module: 'warehouse', title: 'Update Warehouse' },
  { key: PERMISSIONS.delete_warehouse, module: 'warehouse', title: 'Delete Warehouse' },

  // Perfumer permissions
  { key: PERMISSIONS.create_perfumer, module: 'perfumer', title: 'Create Perfumer' },
  { key: PERMISSIONS.read_perfumer, module: 'perfumer', title: 'Read Perfumer' },
  { key: PERMISSIONS.update_perfumer, module: 'perfumer', title: 'Update Perfumer' },
  { key: PERMISSIONS.delete_perfumer, module: 'perfumer', title: 'Delete Perfumer' },

  // Promocode permissions
  { key: PERMISSIONS.create_promocode, module: 'promocode', title: 'Create Promocode' },
  { key: PERMISSIONS.update_promocode, module: 'promocode', title: 'Update Promocode' },
  { key: PERMISSIONS.delete_promocode, module: 'promocode', title: 'Delete Promocode' },
  { key: PERMISSIONS.find_promocodes, module: 'promocode', title: 'Find Promocodes' },
  { key: PERMISSIONS.find_active_promocodes, module: 'promocode', title: 'Find Active Promocodes' },
  { key: PERMISSIONS.validate_promocode, module: 'promocode', title: 'Validate Promocode' },
  { key: PERMISSIONS.use_promocode, module: 'promocode', title: 'Use Promocode' },
  {
    key: PERMISSIONS.get_promocode_usage_stats,
    module: 'promocode',
    title: 'Get Promocode Usage Stats',
  },

  // Contract permissions
  { key: PERMISSIONS.create_contract, module: 'contract', title: 'Create Contract' },
  { key: PERMISSIONS.read_contract, module: 'contract', title: 'Read Contract' },
  { key: PERMISSIONS.update_contract, module: 'contract', title: 'Update Contract' },
  { key: PERMISSIONS.delete_contract, module: 'contract', title: 'Delete Contract' },
  { key: PERMISSIONS.record_payment, module: 'contract', title: 'Record Payment' },
  { key: PERMISSIONS.update_contract_status, module: 'contract', title: 'Update Contract Status' },
  { key: PERMISSIONS.read_my_contracts, module: 'contract', title: 'Read logged user contracts' },
  { key: PERMISSIONS.approve_contract, module: 'contract', title: 'Approve Contract' },
  { key: PERMISSIONS.cancel_contract, module: 'contract', title: 'Cancel Contract' },
  { key: PERMISSIONS.complete_contract, module: 'contract', title: 'Complete Contract' },

  // Product permissions
  { key: PERMISSIONS.create_product, module: 'product', title: 'Create Product' },
  { key: PERMISSIONS.read_product, module: 'product', title: 'Read Product' },
  { key: PERMISSIONS.update_product, module: 'product', title: 'Update Product' },
  { key: PERMISSIONS.delete_product, module: 'product', title: 'Delete Product' },
  {
    key: PERMISSIONS.read_product_for_website,
    module: 'product',
    title: 'Read Product for Website',
  },

  // Order permissions
  { key: PERMISSIONS.create_order, module: 'order', title: 'Create Order' },
  { key: PERMISSIONS.update_order, module: 'order', title: 'Update Order' },
  { key: PERMISSIONS.delete_order, module: 'order', title: 'Delete Order' },
  { key: PERMISSIONS.create_order_item, module: 'order', title: 'Create Order Item' },
  { key: PERMISSIONS.read_order_item, module: 'order', title: 'Read Order Item' },
  { key: PERMISSIONS.update_order_item, module: 'order', title: 'Update Order Item' },
  { key: PERMISSIONS.delete_order_item, module: 'order', title: 'Delete Order Item' },
  { key: PERMISSIONS.create_order_status, module: 'order', title: 'Create Order Status' },
  { key: PERMISSIONS.read_order_status, module: 'order', title: 'Read Order Status' },
  { key: PERMISSIONS.update_order_status, module: 'order', title: 'Update Order Status' },
  { key: PERMISSIONS.delete_order_status, module: 'order', title: 'Delete Order Status' },
  { key: PERMISSIONS.create_order_payment, module: 'order', title: 'Create Order Payment' },
  { key: PERMISSIONS.read_order_payment, module: 'order', title: 'Read Order Payment' },
  { key: PERMISSIONS.update_order_payment, module: 'order', title: 'Update Order Payment' },
  { key: PERMISSIONS.delete_order_payment, module: 'order', title: 'Delete Order Payment' },
  { key: PERMISSIONS.find_my_orders, module: 'order', title: 'Find My Orders' },
  { key: PERMISSIONS.find_orders, module: 'order', title: 'Find Orders' },
  // Payment permissions
  { key: PERMISSIONS.create_payment, module: 'payment', title: 'Create Payment' },
  { key: PERMISSIONS.read_payment, module: 'payment', title: 'Read Payment' },
  { key: PERMISSIONS.update_payment, module: 'payment', title: 'Update Payment' },
  { key: PERMISSIONS.delete_payment, module: 'payment', title: 'Delete Payment' },

  // Invoice permissions
  { key: PERMISSIONS.create_invoice, module: 'invoice', title: 'Create Invoice' },
  { key: PERMISSIONS.read_invoice, module: 'invoice', title: 'Read Invoice' },
  { key: PERMISSIONS.update_invoice, module: 'invoice', title: 'Update Invoice' },
  { key: PERMISSIONS.delete_invoice, module: 'invoice', title: 'Delete Invoice' },

  // Purchase Invoice permissions
  {
    key: PERMISSIONS.create_purchase_invoice,
    module: 'purchase_invoice',
    title: 'Create Purchase Invoice',
  },
  {
    key: PERMISSIONS.read_purchase_invoice,
    module: 'purchase_invoice',
    title: 'Read Purchase Invoice',
  },
  {
    key: PERMISSIONS.update_purchase_invoice,
    module: 'purchase_invoice',
    title: 'Update Purchase Invoice',
  },
  {
    key: PERMISSIONS.delete_purchase_invoice,
    module: 'purchase_invoice',
    title: 'Delete Purchase Invoice',
  },
  {
    key: PERMISSIONS.create_purchase_invoice_material,
    module: 'purchase_invoice_material',
    title: 'Create Purchase Invoice Material',
  },
  {
    key: PERMISSIONS.read_purchase_invoice_material,
    module: 'purchase_invoice_material',
    title: 'Read Purchase Invoice Material',
  },
  {
    key: PERMISSIONS.update_purchase_invoice_material,
    module: 'purchase_invoice_material',
    title: 'Update Purchase Invoice Material',
  },
  {
    key: PERMISSIONS.delete_purchase_invoice_material,
    module: 'purchase_invoice_material',
    title: 'Delete Purchase Invoice Material',
  },

  // Report permissions
  { key: PERMISSIONS.generate_report, module: 'report', title: 'Generate Report' },
  { key: PERMISSIONS.read_report, module: 'report', title: 'Read Report' },
  { key: PERMISSIONS.update_report, module: 'report', title: 'Update Report' },
  { key: PERMISSIONS.delete_report, module: 'report', title: 'Delete Report' },

  // Notification permissions
  { key: PERMISSIONS.create_notification, module: 'notification', title: 'Create Notification' },
  { key: PERMISSIONS.read_notification, module: 'notification', title: 'Read Notification' },
  { key: PERMISSIONS.update_notification, module: 'notification', title: 'Update Notification' },
  { key: PERMISSIONS.delete_notification, module: 'notification', title: 'Delete Notification' },

  // Email queue permissions
  { key: PERMISSIONS.bulmq_queue, module: 'email_queue', title: 'Bulmq Queue' },
  { key: PERMISSIONS.create_email_queue, module: 'email_queue', title: 'Create Email Queue' },
  { key: PERMISSIONS.send_email, module: 'email_queue', title: 'Send Email' },
  { key: PERMISSIONS.read_email_queue, module: 'email_queue', title: 'Read Email Queue' },
  { key: PERMISSIONS.remove_email_job, module: 'email_queue', title: 'Remove Email Job' },
  { key: PERMISSIONS.pause_email_queue, module: 'email_queue', title: 'Pause Email Queue' },
  { key: PERMISSIONS.resume_email_queue, module: 'email_queue', title: 'Resume Email Queue' },
  { key: PERMISSIONS.clean_email_queue, module: 'email_queue', title: 'Clean Email Queue' },

  // Audit logger permissions
  { key: PERMISSIONS.audit_logs, module: 'audit_logger', title: 'Audit Logs' },
  { key: PERMISSIONS.read_audit_logs, module: 'audit_logger', title: 'Read Audit Logs' },

  // Measurement permissions
  { key: PERMISSIONS.create_measurement, module: 'measurement', title: 'Create Measurement' },
  { key: PERMISSIONS.read_measurement, module: 'measurement', title: 'Read Measurement' },
  { key: PERMISSIONS.update_measurement, module: 'measurement', title: 'Update Measurement' },
  { key: PERMISSIONS.delete_measurement, module: 'measurement', title: 'Delete Measurement' },

  // Material permissions
  { key: PERMISSIONS.create_material, module: 'material', title: 'Create Material' },
  { key: PERMISSIONS.read_material, module: 'material', title: 'Read Material' },
  { key: PERMISSIONS.update_material, module: 'material', title: 'Update Material' },
  { key: PERMISSIONS.delete_material, module: 'material', title: 'Delete Material' },

  // Scent note permissions
  { key: PERMISSIONS.create_scent_note, module: 'scent_note', title: 'Create Scent Note' },
  { key: PERMISSIONS.read_scent_note, module: 'scent_note', title: 'Read Scent Note' },
  { key: PERMISSIONS.update_scent_note, module: 'scent_note', title: 'Update Scent Note' },
  { key: PERMISSIONS.delete_scent_note, module: 'scent_note', title: 'Delete Scent Note' },

  // Attachment permissions
  { key: PERMISSIONS.create_attachment, module: 'attachment', title: 'Create Attachment' },
  { key: PERMISSIONS.upload_attachment, module: 'attachment', title: 'Upload Attachment' },
  { key: PERMISSIONS.read_attachment, module: 'attachment', title: 'Read Attachment' },
  { key: PERMISSIONS.update_attachment, module: 'attachment', title: 'Update Attachment' },
  { key: PERMISSIONS.delete_attachment, module: 'attachment', title: 'Delete Attachment' },

  // Salary permissions
  { key: PERMISSIONS.create_salary, module: 'salary', title: 'Create Salary' },
  { key: PERMISSIONS.read_salary, module: 'salary', title: 'Read Salary' },
  { key: PERMISSIONS.update_salary, module: 'salary', title: 'Update Salary' },
  { key: PERMISSIONS.delete_salary, module: 'salary', title: 'Delete Salary' },
  { key: PERMISSIONS.bulk_delete_salary, module: 'salary', title: 'Bulk Delete Salary' },
  { key: PERMISSIONS.read_my_salary, module: 'salary', title: 'Read My Salary' },

  // Salary taxes permissions
  { key: PERMISSIONS.create_salary_taxes, module: 'salary_taxes', title: 'Create Salary Taxes' },
  { key: PERMISSIONS.read_salary_taxes, module: 'salary_taxes', title: 'Read Salary Taxes' },
  { key: PERMISSIONS.update_salary_taxes, module: 'salary_taxes', title: 'Update Salary Taxes' },
  { key: PERMISSIONS.delete_salary_taxes, module: 'salary_taxes', title: 'Delete Salary Taxes' },
  {
    key: PERMISSIONS.bulk_delete_salary_taxes,
    module: 'salary_taxes',
    title: 'Bulk Delete Salary Taxes',
  },
  { key: PERMISSIONS.assign_salary_taxes, module: 'salary_taxes', title: 'Assign Salary Taxes' },
  { key: PERMISSIONS.read_my_salary_taxes, module: 'salary_taxes', title: 'Read My Salary Taxes' },

  // Salary history permissions
  {
    key: PERMISSIONS.create_salary_history,
    module: 'salary_history',
    title: 'Create Salary History',
  },
  { key: PERMISSIONS.read_salary_history, module: 'salary_history', title: 'Read Salary History' },
  {
    key: PERMISSIONS.update_salary_history,
    module: 'salary_history',
    title: 'Update Salary History',
  },
  {
    key: PERMISSIONS.delete_salary_history,
    module: 'salary_history',
    title: 'Delete Salary History',
  },
  {
    key: PERMISSIONS.bulk_delete_salary_history,
    module: 'salary_history',
    title: 'Bulk Delete Salary History',
  },
  {
    key: PERMISSIONS.read_my_salary_history,
    module: 'salary_history',
    title: 'Read My Salary History',
  },

  // Invoice taxes permissions
  { key: PERMISSIONS.create_invoice_taxes, module: 'invoice_taxes', title: 'Create Invoice Taxes' },
  { key: PERMISSIONS.read_invoice_taxes, module: 'invoice_taxes', title: 'Read Invoice Taxes' },
  { key: PERMISSIONS.update_invoice_taxes, module: 'invoice_taxes', title: 'Update Invoice Taxes' },
  { key: PERMISSIONS.delete_invoice_taxes, module: 'invoice_taxes', title: 'Delete Invoice Taxes' },

  // Adjustment entities permissions
  {
    key: PERMISSIONS.create_adjustment_entities,
    module: 'adjustment_entities',
    title: 'Create Adjustment Entities',
  },
  {
    key: PERMISSIONS.read_adjustment_entities,
    module: 'adjustment_entities',
    title: 'Read Adjustment Entities',
  },
  {
    key: PERMISSIONS.update_adjustment_entities,
    module: 'adjustment_entities',
    title: 'Update Adjustment Entities',
  },
  {
    key: PERMISSIONS.delete_adjustment_entities,
    module: 'adjustment_entities',
    title: 'Delete Adjustment Entities',
  },

  // Adjustment factors permissions
  {
    key: PERMISSIONS.create_adjustment_factors,
    module: 'adjustment_factors',
    title: 'Create Adjustment Factors',
  },
  {
    key: PERMISSIONS.read_adjustment_factors,
    module: 'adjustment_factors',
    title: 'Read Adjustment Factors',
  },
  {
    key: PERMISSIONS.update_adjustment_factors,
    module: 'adjustment_factors',
    title: 'Update Adjustment Factors',
  },
  {
    key: PERMISSIONS.delete_adjustment_factors,
    module: 'adjustment_factors',
    title: 'Delete Adjustment Factors',
  },

  // User adjustments permissions
  {
    key: PERMISSIONS.create_user_adjustments,
    module: 'user_adjustments',
    title: 'Create User Adjustments',
  },
  {
    key: PERMISSIONS.read_user_adjustments,
    module: 'user_adjustments',
    title: 'Read User Adjustments',
  },
  {
    key: PERMISSIONS.update_user_adjustments,
    module: 'user_adjustments',
    title: 'Update User Adjustments',
  },
  {
    key: PERMISSIONS.delete_user_adjustments,
    module: 'user_adjustments',
    title: 'Delete User Adjustments',
  },
  {
    key: PERMISSIONS.read_my_user_adjustments,
    module: 'user_adjustments',
    title: 'Read My User Adjustments',
  },
  {
    key: PERMISSIONS.read_user_adjustments_stats,
    module: 'user_adjustments',
    title: 'Read User Adjustments Stats',
  },
  {
    key: PERMISSIONS.read_my_user_adjustments_stats,
    module: 'user_adjustments',
    title: 'Read My User Adjustments Stats',
  },

  // User group permissions
  { key: PERMISSIONS.create_user_group, module: 'user_group', title: 'Create User Group' },
  { key: PERMISSIONS.read_user_group, module: 'user_group', title: 'Read User Group' },
  { key: PERMISSIONS.update_user_group, module: 'user_group', title: 'Update User Group' },
  { key: PERMISSIONS.delete_user_group, module: 'user_group', title: 'Delete User Group' },
  { key: PERMISSIONS.assign_users_to_group, module: 'user_group', title: 'Assign Users to Group' },

  // Permissions
  { key: PERMISSIONS.read_permissions, module: 'permissions', title: 'Read Permissions' },

  // Role permissions
  { key: PERMISSIONS.create_role, module: 'role', title: 'Create Role' },
  { key: PERMISSIONS.read_role, module: 'role', title: 'Read Role' },
  { key: PERMISSIONS.update_role, module: 'role', title: 'Update Role' },
  { key: PERMISSIONS.delete_role, module: 'role', title: 'Delete Role' },

  // Alert permissions
  { key: PERMISSIONS.create_alert, module: 'alert', title: 'Create Alert' },
  { key: PERMISSIONS.read_alert, module: 'alert', title: 'Read Alert' },
  { key: PERMISSIONS.update_alert, module: 'alert', title: 'Update Alert' },
  { key: PERMISSIONS.delete_alert, module: 'alert', title: 'Delete Alert' },
  { key: PERMISSIONS.mark_alert_as_acknowledged, module: 'alert', title: 'Acknowledge Alert' },

  // Job hierarchy permissions
  { key: PERMISSIONS.add_member, module: 'job_hierarchy', title: 'Add Member' },
  { key: PERMISSIONS.remove_member, module: 'job_hierarchy', title: 'Remove Member' },
  { key: PERMISSIONS.reorder_member, module: 'job_hierarchy', title: 'Reorder Member' },
  { key: PERMISSIONS.move_member, module: 'job_hierarchy', title: 'Move Member' },
  { key: PERMISSIONS.replace_user, module: 'job_hierarchy', title: 'Replace User' },
  { key: PERMISSIONS.replace_hierarchy, module: 'job_hierarchy', title: 'Replace Hierarchy' },
  { key: PERMISSIONS.read_hierarchy, module: 'job_hierarchy', title: 'Read Hierarchy' },

  // Complaint permissions
  { key: PERMISSIONS.read_complaint, module: 'complaint', title: 'Read Complaint' },
  { key: PERMISSIONS.create_complaint, module: 'complaint', title: 'Create Complaint' },
  { key: PERMISSIONS.update_complaint, module: 'complaint', title: 'Update Complaint' },
  { key: PERMISSIONS.delete_complaint, module: 'complaint', title: 'Delete Complaint' },
  { key: PERMISSIONS.accept_complaint, module: 'complaint', title: 'Accept Complaint' },

  // Complaint Status permissions
  {
    key: PERMISSIONS.read_complaint_status,
    module: 'complaint_status',
    title: 'Read Complaint Status',
  },
  {
    key: PERMISSIONS.create_complaint_status,
    module: 'complaint_status',
    title: 'Create Complaint Status',
  },
  {
    key: PERMISSIONS.update_complaint_status,
    module: 'complaint_status',
    title: 'Update Complaint Status',
  },
  {
    key: PERMISSIONS.delete_complaint_status,
    module: 'complaint_status',
    title: 'Delete Complaint Status',
  },

  // Complaint Category permissions
  {
    key: PERMISSIONS.read_complaint_category,
    module: 'complaint_category',
    title: 'Read Complaint Category',
  },
  {
    key: PERMISSIONS.create_complaint_category,
    module: 'complaint_category',
    title: 'Create Complaint Category',
  },
  {
    key: PERMISSIONS.update_complaint_category,
    module: 'complaint_category',
    title: 'Update Complaint Category',
  },
  {
    key: PERMISSIONS.delete_complaint_category,
    module: 'complaint_category',
    title: 'Delete Complaint Category',
  },

  // Complaint Notes permissions
  { key: PERMISSIONS.read_complaint_note, module: 'complaint_note', title: 'Read Complaint Note' },
  {
    key: PERMISSIONS.create_complaint_note,
    module: 'complaint_note',
    title: 'Create Complaint Note',
  },
  {
    key: PERMISSIONS.delete_complaint_note,
    module: 'complaint_note',
    title: 'Delete Complaint Note',
  },

  // Complaint Escalation permissions
  {
    key: PERMISSIONS.read_complaint_escalation,
    module: 'complaint_escalation',
    title: 'Read Complaint Escalation',
  },
  {
    key: PERMISSIONS.create_complaint_escalation,
    module: 'complaint_escalation',
    title: 'Create Complaint Escalation',
  },
  {
    key: PERMISSIONS.update_complaint_escalation,
    module: 'complaint_escalation',
    title: 'Update Complaint Escalation',
  },
  {
    key: PERMISSIONS.delete_complaint_escalation,
    module: 'complaint_escalation',
    title: 'Delete Complaint Escalation',
  },

  // Comment permissions
  { key: PERMISSIONS.read_comment, module: 'comment', title: 'Read Comment' },
  { key: PERMISSIONS.create_comment, module: 'comment', title: 'Create Comment' },
  { key: PERMISSIONS.update_comment, module: 'comment', title: 'Update Comment' },
  { key: PERMISSIONS.delete_comment, module: 'comment', title: 'Delete Comment' },

  // Rating permissions
  { key: PERMISSIONS.read_rating, module: 'rating', title: 'Read Rating' },
  { key: PERMISSIONS.create_rating, module: 'rating', title: 'Create Rating' },
  { key: PERMISSIONS.update_rating, module: 'rating', title: 'Update Rating' },
  { key: PERMISSIONS.delete_rating, module: 'rating', title: 'Delete Rating' },

  // Blocked Users permissions
  { key: PERMISSIONS.read_blocked_users, module: 'blocked_users', title: 'Read Blocked Users' },
  { key: PERMISSIONS.toggle_block_users, module: 'blocked_users', title: 'Toggle Block Users' },

  // Task Management permissions
  { key: PERMISSIONS.create_task, module: 'task', title: 'Create Task' },
  { key: PERMISSIONS.read_task, module: 'task', title: 'Read Task' },
  { key: PERMISSIONS.update_task, module: 'task', title: 'Update Task' },
  { key: PERMISSIONS.delete_task, module: 'task', title: 'Delete Task' },
  { key: PERMISSIONS.update_task_status, module: 'task', title: 'Update Task Status' },
  { key: PERMISSIONS.manage_task_status, module: 'task_status', title: 'Manage Task Status' },
  { key: PERMISSIONS.read_task_status, module: 'task_status', title: 'Read Task Status' },
  { key: PERMISSIONS.create_task_comment, module: 'task_comment', title: 'Create Task Comment' },
  { key: PERMISSIONS.read_task_comment, module: 'task_comment', title: 'Read Task Comment' },
  { key: PERMISSIONS.update_task_comment, module: 'task_comment', title: 'Update Task Comment' },
  { key: PERMISSIONS.delete_task_comment, module: 'task_comment', title: 'Delete Task Comment' },
  { key: PERMISSIONS.manage_task_watchers, module: 'task_watchers', title: 'Manage Task Watchers' },

  // blog
  { key: PERMISSIONS.create_blog, module: 'blog', title: 'Create Blog' },
  { key: PERMISSIONS.find_blog, module: 'blog', title: 'Read Blog' },
  { key: PERMISSIONS.update_blog, module: 'blog', title: 'Update Blog' },
  { key: PERMISSIONS.remove_blog, module: 'blog', title: 'Remove Blog' },
  { key: PERMISSIONS.find_blog, module: 'blog', title: 'Find Blog' },
  { key: PERMISSIONS.find_published_blog, module: 'blog', title: 'Find Published Blog' },

  // blog category
  { key: PERMISSIONS.create_blog_category, module: 'blog_category', title: 'Create Blog Category' },
  { key: PERMISSIONS.find_blog_category, module: 'blog_category', title: 'Read Blog Category' },
  { key: PERMISSIONS.update_blog_category, module: 'blog_category', title: 'Update Blog Category' },
  { key: PERMISSIONS.remove_blog_category, module: 'blog_category', title: 'Remove Blog Category' },
  { key: PERMISSIONS.find_blog_category, module: 'blog_category', title: 'Find Blog Category' },
  // Cart permissions
  { key: PERMISSIONS.add_to_cart, module: 'cart', title: 'Add to Cart' },
  { key: PERMISSIONS.remove_from_cart, module: 'cart', title: 'Remove from Cart' },
  { key: PERMISSIONS.update_cart_item, module: 'cart', title: 'Update Cart Item' },
  { key: PERMISSIONS.get_cart, module: 'cart', title: 'Get Cart' },

  // stock permissions
  { key: PERMISSIONS.create_stock, module: 'stock', title: 'Create Stock' },
  { key: PERMISSIONS.read_stock, module: 'stock', title: 'Read Stock' },
  { key: PERMISSIONS.update_stock, module: 'stock', title: 'Update Stock' },
  { key: PERMISSIONS.delete_stock, module: 'stock', title: 'Delete Stock' },
];

export const permissionKeys = Object.values(permissionData).map((p) => p.key);
