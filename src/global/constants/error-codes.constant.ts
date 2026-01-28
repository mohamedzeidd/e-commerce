import { LanguageCodes } from './language-codes.constants';

export enum ERR_CODES {
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  INVALID_EMAIL = 'INVALID_EMAIL',
  USAGE_LIMIT_REACHED = 'USAGE_LIMIT_REACHED',
  INVALID_ID = 'INVALID_ID',
  INVALID_BULK_DATA = 'INVALID_BULK_DATA',
  INVALID_TRANSLATION = 'INVALID_TRANSLATION',
  OPTIMISTIC_LOCK_ERROR = 'OPTIMISTIC_LOCK_ERROR',
  INVALID_STATE_TRANSITION = 'INVALID_STATE_TRANSITION',
  OPERATION_NOT_ALLOWED = 'OPERATION_NOT_ALLOWED',
  GENERAL_ERROR = 'GENERAL_ERROR',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  INVALID_PARAMS = 'INVALID_PARAMS',
  DUPLICATE_ENTRY = 'DUPLICATE_ENTRY',
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_ALLOWED = 'NOT_ALLOWED',
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  ROUTE_NOT_FOUND = 'ROUTE_NOT_FOUND',
  INVALID_FILE_FORMAT = 'INVALID_FILE_FORMAT',
  INVALID_CREDINTIALS = 'INVALID_CREDINTIALS',
  USER_NOT_VERIFIED = 'USER_NOT_VERIFIED',
  USER_NOT_VERIFIED_BY_CRM = 'USER_NOT_VERIFIED_BY_CRM',
  ROLE_NOT_FOUND = 'ROLE_NOT_FOUND',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
  VERIFICATION_CODE_NOT_VERIFIED = 'VERIFICATION_CODE_NOT_VERIFIED',
  INVALID_TOKEN = 'INVALID_TOKEN',
  INVALID_VERIFICATION_CODE = 'INVALID_VERIFICATION_CODE',
  NO_REASON_TO_VERIFY = 'NO_REASON_TO_VERIFY',
  EXPIRED_CODE = 'EXPIRED_CODE',
  INVALID_DATA = 'INVALID_DATA',
  NO_REASON_TO_RESEND_CODE = 'NO_REASON_TO_RESEND_CODE',
  FILE_NOT_FOUND_ON_BUCKET = 'FILE_NOT_FOUND_ON_BUCKET',
  PHONE_NUMBER_ALREADY_EXISTS = 'PHONE_NUMBER_ALREADY_EXISTS',
  INVALID_LANGUAGE_HEADER = 'INVALID_LANGUAGE_HEADER',
  CATEGORY_MUST_HAVE_CONTENT = 'CATEGORY_MUST_HAVE_CONTENT',
  FAILED_UPDATE_DATA = 'FAILED_UPDATE_DATA',
  ACCOUNT_NOT_ACTIVE = 'ACCOUNT_NOT_ACTIVE',
  ENTITY_ALREADY_EXISTS = 'ENTITY_ALREADY_EXISTS',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
  EMAIL_UPDATE_REQUEST_NOT_FOUND = 'EMAIL_UPDATE_REQUEST_NOT_FOUND',
  USER_BLOCKED = 'USER_BLOCKED',
  CANNOT_BLOCK_SELF = 'CANNOT_BLOCK_SELF',
  FILE_NOT_FOUND = 'FILE_NOT_FOUND',
  IMAGE_NOT_FOUND = "IMAGE_NOT_FOUND",
  STOCK_ALREADY_EXISTS = 'STOCK_ALREADY_EXISTS',
  ALERT_MODULE_NOT_SUPPORTED = 'ALERT_MODULE_NOT_SUPPORTED',
  NO_DEFAULT_STATUS = 'NO_DEFAULT_STATUS',
  CATEGORY_NOT_FOUND = 'CATEGORY_NOT_FOUND',
  COMPLAINT_NOT_FOUND = 'COMPLAINT_NOT_FOUND',
  STATUS_NOT_FOUND = 'STATUS_NOT_FOUND',
  COMPLAINT_ALREADY_ACCEPTED = 'COMPLAINT_ALREADY_ACCEPTED',
  CANNOT_DELETE_DEFAULT_STATUS = 'CANNOT_DELETE_DEFAULT_STATUS',
  USER_BLOCKED_FROM_RATING = 'USER_BLOCKED_FROM_RATING',
  USER_ALREADY_RATED_PRODUCT = 'USER_ALREADY_RATED_PRODUCT',
  USER_BLOCKED_FROM_COMMENTING = 'USER_BLOCKED_FROM_COMMENTING',
  PARENT_COMMENT_NOT_FOUND = 'PARENT_COMMENT_NOT_FOUND',
  REPLIES_ONLY_ALLOWED_ON_TOP_LEVEL_COMMENTS = 'REPLIES_ONLY_ALLOWED_ON_TOP_LEVEL_COMMENTS',
  ONLY_COMMENT_OWNER_CAN_REPLY = 'ONLY_COMMENT_OWNER_CAN_REPLY',
  ONLY_COMMENT_OWNER_CAN_UPDATE = 'ONLY_COMMENT_OWNER_CAN_UPDATE',
  ONLY_COMMENT_OWNER_CAN_DELETE = 'ONLY_COMMENT_OWNER_CAN_DELETE',
  POSITION_ALREADY_EXISTS = 'POSITION_ALREADY_EXISTS',
  STATUS_ALREADY_EXISTS = 'STATUS_ALREADY_EXISTS',
  CANNOT_DELETE_STATUS_USED_BY_TASKS = 'CANNOT_DELETE_STATUS_USED_BY_TASKS',
  PARENT_TASK_NOT_FOUND = 'PARENT_TASK_NOT_FOUND',
  CAN_ONLY_MOVE_TASK_FORWARD_IN_WORKFLOW = 'CAN_ONLY_MOVE_TASK_FORWARD_IN_WORKFLOW',
  CANNOT_ASSIGN_TASK_TO_USER_OUTSIDE_YOUR_HIERARCHY = 'CANNOT_ASSIGN_TASK_TO_USER_OUTSIDE_YOUR_HIERARCHY',
  PRODUCT_ALREADY_IN_WISHLIST = 'PRODUCT_ALREADY_IN_WISHLIST',
  PROMOCODE_ALREADY_EXISTS = 'PROMOCODE_ALREADY_EXISTS',
  INVALID_PROMOCODE = 'INVALID_PROMOCODE',
  PROMOCODE_NOT_FOUND = 'PROMOCODE_NOT_FOUND',
  PROMOCODE_USAGE_LIMIT_REACHED = 'PROMOCODE_USAGE_LIMIT_REACHED',
  PROMOCODE_NOT_ACTIVE = 'PROMOCODE_NOT_ACTIVE',
  PROMOCODE_ALREADY_USED = 'PROMOCODE_ALREADY_USED',
  PROMOCODE_NOT_ALLOWED_FOR_ROLE = 'PROMOCODE_NOT_ALLOWED_FOR_ROLE',
  PROMOCODE_NOT_ALLOWED_FOR_USER = 'PROMOCODE_NOT_ALLOWED_FOR_USER',
  PROMOCODE_INVALID_FOR_ORDER_AMOUNT = 'PROMOCODE_INVALID_FOR_ORDER_AMOUNT',
  PROMOCODE_USAGE_NOT_FOUND = 'PROMOCODE_USAGE_NOT_FOUND',
  PROMOCODE_EXPIRED = 'PROMOCODE_EXPIRED',
  INSAFFICIENT_PRODUCT_STOCK = 'INSAFFICIENT_PRODUCT_STOCK',
  NOT_FOUND_CART_ITEMS = 'NOT_FOUND_CART_ITEMS',
  INVALID_ORDER_STATUS_TRANSITION = 'INVALID_ORDER_STATUS_TRANSITION',
  INVOICE_NOT_FOUND = 'INVOICE_NOT_FOUND',
  INSTALLMENT_NOT_FOUND = 'INSTALLMENT_NOT_FOUND',
  MIN_ORDER_AMOUNT_NOT_MET = 'MIN_ORDER_AMOUNT_NOT_MET',
  CONTRACT_NOT_FOUND = 'CONTRACT_NOT_FOUND',
  CONTRACT_NOT_PENDING = 'CONTRACT_NOT_PENDING',
  CONTRACT_ALREADY_APPROVED = 'CONTRACT_ALREADY_APPROVED',
  PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',
  CONTRACT_NOT_ACTIVE = 'CONTRACT_NOT_ACTIVE',
  PURCHASE_INVOICE_NOT_FOUND = 'PURCHASE_INVOICE_NOT_FOUND',
  PURCHASE_INVOICE_MATERIAL_NOT_FOUND = 'PURCHASE_INVOICE_MATERIAL_NOT_FOUND',
  WAREHOUSE_NOT_FOUND = 'WAREHOUSE_NOT_FOUND',
  MATERIAL_NOT_FOUND = 'MATERIAL_NOT_FOUND',
  INSUFFICIENT_MATERIAL_STOCK = 'INSUFFICIENT_MATERIAL_STOCK',
  PURCHASE_ORDER_NOT_FOUND = 'PURCHASE_ORDER_NOT_FOUND',
  PURCHASE_ORDER_ALREADY_COMPLETED = 'PURCHASE_ORDER_ALREADY_COMPLETED',
  PURCHASE_ORDER_MATERIAL_NOT_FOUND = 'PURCHASE_ORDER_MATERIAL_NOT_FOUND',
  PURCHASE_ORDER_MATERIAL_ALREADY_FULLY_RECEIVED = 'PURCHASE_ORDER_MATERIAL_ALREADY_FULLY_RECEIVED',
  INVALID_QUANTITY = 'INVALID_QUANTITY',
  ALERT_NOT_PENDING = 'ALERT_NOT_PENDING',
  IMAGE_ONLY = 'IMAGE_ONLY',
}

export const ErrCodes: { [key in ERR_CODES]: Record<LanguageCodes, string> } = {
  [ERR_CODES.ALERT_NOT_PENDING]: {
    [LanguageCodes.English]: 'Alert is not in pending status',
    [LanguageCodes.Arabic]: 'التنبيه ليس في حالة انتظار',
  },
  [ERR_CODES.PURCHASE_INVOICE_NOT_FOUND]: {
    [LanguageCodes.English]: 'Purchase Invoice not found',
    [LanguageCodes.Arabic]: 'فاتورة الشراء غير موجودة',
  },
  [ERR_CODES.PURCHASE_INVOICE_MATERIAL_NOT_FOUND]: {
    [LanguageCodes.English]: 'Purchase Invoice Material not found',
    [LanguageCodes.Arabic]: 'مادة فاتورة الشراء غير موجودة',
  },
  [ERR_CODES.WAREHOUSE_NOT_FOUND]: {
    [LanguageCodes.English]: 'Warehouse not found',
    [LanguageCodes.Arabic]: 'المستودع غير موجود',
  },
  [ERR_CODES.MATERIAL_NOT_FOUND]: {
    [LanguageCodes.English]: 'Material not found',
    [LanguageCodes.Arabic]: 'المادة غير موجودة',
  },
  [ERR_CODES.INSUFFICIENT_MATERIAL_STOCK]: {
    [LanguageCodes.English]: 'Insufficient material stock in the specified warehouse',
    [LanguageCodes.Arabic]: 'المخزون غير كافٍ للمادة في المستودع المحدد',
  },
  [ERR_CODES.PURCHASE_ORDER_NOT_FOUND]: {
    [LanguageCodes.English]: 'Purchase Order not found',
    [LanguageCodes.Arabic]: 'طلب الشراء غير موجود',
  },
  [ERR_CODES.PURCHASE_ORDER_ALREADY_COMPLETED]: {
    [LanguageCodes.English]: 'Purchase Order is already completed',
    [LanguageCodes.Arabic]: 'طلب الشراء مكتمل بالفعل',
  },
  [ERR_CODES.PURCHASE_ORDER_MATERIAL_NOT_FOUND]: {
    [LanguageCodes.English]: 'Purchase Order Material not found',
    [LanguageCodes.Arabic]: 'مادة طلب الشراء غير موجودة',
  },
  [ERR_CODES.PURCHASE_ORDER_MATERIAL_ALREADY_FULLY_RECEIVED]: {
    [LanguageCodes.English]: 'Purchase Order Material has already been fully received',
    [LanguageCodes.Arabic]: 'تم استلام مادة طلب الشراء بالكامل بالفعل',
  },
  [ERR_CODES.INVALID_QUANTITY]: {
    [LanguageCodes.English]: 'Invalid quantity specified',
    [LanguageCodes.Arabic]: 'الكمية المحددة غير صالحة',
  },
  [ERR_CODES.PRODUCT_ALREADY_IN_WISHLIST]: {
    [LanguageCodes.English]: 'Product is already in your wishlist',
    [LanguageCodes.Arabic]: 'المنتج موجود بالفعل في قائمة رغباتك',
  },
  [ERR_CODES.CANNOT_ASSIGN_TASK_TO_USER_OUTSIDE_YOUR_HIERARCHY]: {
    [LanguageCodes.English]: 'Cannot assign task to user outside your hierarchy',
    [LanguageCodes.Arabic]: 'لا يمكن تعيين المهمة إلى مستخدم خارج خطوط الموظفين الخاصة بك',
  },
  [ERR_CODES.CAN_ONLY_MOVE_TASK_FORWARD_IN_WORKFLOW]: {
    [LanguageCodes.English]: 'Can only move task forward in workflow',
    [LanguageCodes.Arabic]: 'يمكنك فقط نقل المهمة للأمام في العملية',
  },
  [ERR_CODES.PARENT_TASK_NOT_FOUND]: {
    [LanguageCodes.English]: 'Parent task not found',
    [LanguageCodes.Arabic]: 'المهمة الأصلية غير موجودة',
  },
  [ERR_CODES.CANNOT_DELETE_STATUS_USED_BY_TASKS]: {
    [LanguageCodes.English]: 'Cannot delete status that is being used by tasks',
    [LanguageCodes.Arabic]: 'لا يمكن حذف الحالة التي يتم استخدامها بواسطة المهام',
  },
  [ERR_CODES.STATUS_ALREADY_EXISTS]: {
    [LanguageCodes.English]: 'Status already exists',
    [LanguageCodes.Arabic]: 'الحالة موجودة بالفعل',
  },
  [ERR_CODES.POSITION_ALREADY_EXISTS]: {
    [LanguageCodes.English]: 'Position already exists',
    [LanguageCodes.Arabic]: 'الموضع موجود بالفعل',
  },
  [ERR_CODES.ONLY_COMMENT_OWNER_CAN_DELETE]: {
    [LanguageCodes.English]: 'You can only delete your own comments',
    [LanguageCodes.Arabic]: 'يمكنك فقط حذف تعليقاتك الخاصة',
  },
  [ERR_CODES.ONLY_COMMENT_OWNER_CAN_UPDATE]: {
    [LanguageCodes.English]: 'You can only update your own comments',
    [LanguageCodes.Arabic]: 'يمكنك فقط تحديث تعليقاتك الخاصة',
  },
  [ERR_CODES.ONLY_COMMENT_OWNER_CAN_REPLY]: {
    [LanguageCodes.English]: 'Only the comment owner can reply to this comment',
    [LanguageCodes.Arabic]: 'فقط المالك للتعليق يمكنه الرد عليه',
  },
  [ERR_CODES.REPLIES_ONLY_ALLOWED_ON_TOP_LEVEL_COMMENTS]: {
    [LanguageCodes.English]: 'Replies are only allowed on top-level comments',
    [LanguageCodes.Arabic]: 'الردود فقط مسموحة في التعليقات العلوية',
  },
  [ERR_CODES.PARENT_COMMENT_NOT_FOUND]: {
    [LanguageCodes.English]: 'Parent comment not found',
    [LanguageCodes.Arabic]: 'التعليق الأصلي غير موجود',
  },
  [ERR_CODES.USER_BLOCKED_FROM_COMMENTING]: {
    [LanguageCodes.English]: 'User is blocked from commenting',
    [LanguageCodes.Arabic]: 'المستخدم محظور من التعليق',
  },
  [ERR_CODES.USER_ALREADY_RATED_PRODUCT]: {
    [LanguageCodes.English]: 'User has already rated this product',
    [LanguageCodes.Arabic]: 'المستخدم قد تقيم هذا المنتج بالفعل',
  },
  [ERR_CODES.CANNOT_DELETE_DEFAULT_STATUS]: {
    [LanguageCodes.English]: 'Cannot delete default status',
    [LanguageCodes.Arabic]: 'لا يمكن حذف الحالة الافتراضية',
  },
  [ERR_CODES.USER_BLOCKED_FROM_RATING]: {
    [LanguageCodes.English]: 'User is blocked from rating',
    [LanguageCodes.Arabic]: 'المستخدم محظور من التقييم',
  },
  [ERR_CODES.COMPLAINT_ALREADY_ACCEPTED]: {
    [LanguageCodes.English]: 'Complaint already accepted',
    [LanguageCodes.Arabic]: 'الشكوى مقبولة بالفعل',
  },
  [ERR_CODES.STATUS_NOT_FOUND]: {
    [LanguageCodes.English]: 'Status not found',
    [LanguageCodes.Arabic]: 'الحالة غير موجودة',
  },
  [ERR_CODES.COMPLAINT_NOT_FOUND]: {
    [LanguageCodes.English]: 'Complaint not found',
    [LanguageCodes.Arabic]: 'الشكوى غير موجودة',
  },
  [ERR_CODES.CATEGORY_NOT_FOUND]: {
    [LanguageCodes.English]: 'Category not found',
    [LanguageCodes.Arabic]: 'الفئة غير موجودة',
  },
  [ERR_CODES.NO_DEFAULT_STATUS]: {
    [LanguageCodes.English]: 'No default status found',
    [LanguageCodes.Arabic]: 'لم يتم العثور على حالة افتراضية',
  },
  [ERR_CODES.ALERT_MODULE_NOT_SUPPORTED]: {
    [LanguageCodes.English]: 'Alert module not supported',
    [LanguageCodes.Arabic]: 'الموديل غير مدعوم',
  },
  [ERR_CODES.CONTRACT_NOT_ACTIVE]: {
    [LanguageCodes.English]: 'Contract is not active',
    [LanguageCodes.Arabic]: 'العقد غير نشط',
  },
  [ERR_CODES.PRODUCT_NOT_FOUND]: {
    [LanguageCodes.English]: 'Product not found',
    [LanguageCodes.Arabic]: 'المنتج غير موجود',
  },
  [ERR_CODES.CONTRACT_NOT_PENDING]: {
    [LanguageCodes.English]: 'Contract is not in pending status',
    [LanguageCodes.Arabic]: 'العقد ليس في حالة انتظار',
  },
  [ERR_CODES.CONTRACT_ALREADY_APPROVED]: {
    [LanguageCodes.English]: 'Contract has already been approved',
    [LanguageCodes.Arabic]: 'تمت الموافقة على العقد بالفعل',
  },
  [ERR_CODES.CONTRACT_NOT_FOUND]: {
    [LanguageCodes.English]: 'Contract not found',
    [LanguageCodes.Arabic]: 'العقد غير موجود',
  },
  [ERR_CODES.MIN_ORDER_AMOUNT_NOT_MET]: {
    [LanguageCodes.English]: 'Minimum order amount not met',
    [LanguageCodes.Arabic]: 'لم يتم استيفاء الحد الأدنى لمبلغ الطلب',
  },
  [ERR_CODES.INVOICE_NOT_FOUND]: {
    [LanguageCodes.English]: 'Invoice not found',
    [LanguageCodes.Arabic]: 'الفاتورة غير موجودة',
  },
  [ERR_CODES.INSTALLMENT_NOT_FOUND]: {
    [LanguageCodes.English]: 'Installment not found',
    [LanguageCodes.Arabic]: 'القسط غير موجود',
  },
  [ERR_CODES.INVALID_ORDER_STATUS_TRANSITION]: {
    [LanguageCodes.English]: 'Invalid order status transition',
    [LanguageCodes.Arabic]: 'انتقال حالة الطلب غير صالح',
  },
  [ERR_CODES.NOT_FOUND_CART_ITEMS]: {
    [LanguageCodes.English]: 'No items found in the cart',
    [LanguageCodes.Arabic]: 'لا توجد عناصر في السلة',
  },
  [ERR_CODES.INSAFFICIENT_PRODUCT_STOCK]: {
    [LanguageCodes.English]: 'Insufficient product stock',
    [LanguageCodes.Arabic]: 'المخزون غير كافٍ للمنتج',
  },
  [ERR_CODES.PROMOCODE_EXPIRED]: {
    [LanguageCodes.English]: 'Promocode has expired',
    [LanguageCodes.Arabic]: 'رمز الخصم منتهي الصلاحية',
  },
  [ERR_CODES.PROMOCODE_ALREADY_EXISTS]: {
    [LanguageCodes.English]: 'Promocode already exists',
    [LanguageCodes.Arabic]: 'رمز الخصم موجود بالفعل',
  },
  [ERR_CODES.INVALID_PROMOCODE]: {
    [LanguageCodes.English]: 'Invalid promocode',
    [LanguageCodes.Arabic]: 'رمز الخصم غير صالح',
  },
  [ERR_CODES.PROMOCODE_NOT_FOUND]: {
    [LanguageCodes.English]: 'Promocode not found',
    [LanguageCodes.Arabic]: 'رمز الخصم غير موجود',
  },
  [ERR_CODES.PROMOCODE_USAGE_LIMIT_REACHED]: {
    [LanguageCodes.English]: 'Promocode usage limit reached',
    [LanguageCodes.Arabic]: 'تم الوصول إلى حد استخدام رمز الخصم',
  },
  [ERR_CODES.PROMOCODE_NOT_ACTIVE]: {
    [LanguageCodes.English]: 'Promocode is not active',
    [LanguageCodes.Arabic]: 'رمز الخصم غير نشط',
  },
  [ERR_CODES.PROMOCODE_ALREADY_USED]: {
    [LanguageCodes.English]: 'Promocode has already been used',
    [LanguageCodes.Arabic]: 'تم استخدام رمز الخصم بالفعل',
  },
  [ERR_CODES.PROMOCODE_NOT_ALLOWED_FOR_ROLE]: {
    [LanguageCodes.English]: 'Promocode is not allowed for this role',
    [LanguageCodes.Arabic]: 'رمز الخصم غير مسموح به لهذا الدور',
  },
  [ERR_CODES.PROMOCODE_NOT_ALLOWED_FOR_USER]: {
    [LanguageCodes.English]: 'Promocode is not allowed for this user',
    [LanguageCodes.Arabic]: 'رمز الخصم غير مسموح به لهذا المستخدم',
  },
  [ERR_CODES.PROMOCODE_INVALID_FOR_ORDER_AMOUNT]: {
    [LanguageCodes.English]: 'Promocode is invalid for this order amount',
    [LanguageCodes.Arabic]: 'رمز الخصم غير صالح لهذا المبلغ من الطلب',
  },
  [ERR_CODES.PROMOCODE_USAGE_NOT_FOUND]: {
    [LanguageCodes.English]: 'Promocode usage not found',
    [LanguageCodes.Arabic]: 'استخدام رمز الخصم غير موجود',
  },
  [ERR_CODES.STOCK_ALREADY_EXISTS]: {
    [LanguageCodes.English]: 'Stock already exists for this material in this warehouse. Use update instead.',
    [LanguageCodes.Arabic]: 'المخزون موجود بالفعل لهذا المادة في هذا المستودع. استخدم التحديث بدلاً من ذلك.',
  },
  FILE_NOT_FOUND: {
    [LanguageCodes.English]: 'File not found',
    [LanguageCodes.Arabic]: 'الملف غير موجود',
  },
  IMAGE_NOT_FOUND:{
    [LanguageCodes.English]:"Image not found",
    [LanguageCodes.Arabic]:"الصورة غير موجودو"
  },
  CANNOT_BLOCK_SELF: {
    [LanguageCodes.English]: 'You cannot block yourself',
    [LanguageCodes.Arabic]: 'لا يمكنك حظر نفسك',
  },
  USER_BLOCKED: {
    [LanguageCodes.English]: 'User is blocked',
    [LanguageCodes.Arabic]: 'المستخدم محظور',
  },
  EMAIL_UPDATE_REQUEST_NOT_FOUND: {
    [LanguageCodes.English]: 'Email update request not found',
    [LanguageCodes.Arabic]: 'طلب تحديث البريد الإلكتروني غير موجود',
  },
  TOO_MANY_REQUESTS: {
    [LanguageCodes.English]: 'Too Many Requests',
    [LanguageCodes.Arabic]: 'طلبات كثيرة جدا',
  },
  ENTITY_ALREADY_EXISTS: {
    [LanguageCodes.English]: 'Entity Already Exists',
    [LanguageCodes.Arabic]: 'الكيان موجود بالفعل',
  },
  ACCOUNT_NOT_ACTIVE: {
    [LanguageCodes.English]: 'Account Not Active',
    [LanguageCodes.Arabic]: 'الحساب غير مفعل',
  },
  EMAIL_NOT_VERIFIED: {
    [LanguageCodes.English]: 'Email Not Verified',
    [LanguageCodes.Arabic]: 'البريد الإلكتروني غير موثق',
  },
  INVALID_CREDENTIALS: {
    [LanguageCodes.English]: 'Invalid Credentials',
    [LanguageCodes.Arabic]: 'بيانات اعتماد غير صالحة',
  },
  INVALID_EMAIL: {
    [LanguageCodes.English]: 'Invalid Email',
    [LanguageCodes.Arabic]: 'البريد الإلكتروني غير صالح',
  },
  USAGE_LIMIT_REACHED: {
    [LanguageCodes.English]: 'Usage Limit Reached',
    [LanguageCodes.Arabic]: 'تم الوصول إلى حد الاستخدام',
  },
  INVALID_ID: {
    [LanguageCodes.English]: 'Invalid ID',
    [LanguageCodes.Arabic]: 'معرف غير صالح',
  },
  INVALID_BULK_DATA: {
    [LanguageCodes.English]: 'Invalid Bulk Data',
    [LanguageCodes.Arabic]: 'بيانات مجمعة غير صالحة',
  },
  INVALID_TRANSLATION: {
    [LanguageCodes.English]: 'Invalid Translation',
    [LanguageCodes.Arabic]: 'ترجمة غير صالحة',
  },
  [ERR_CODES.OPTIMISTIC_LOCK_ERROR]: {
    [LanguageCodes.English]: 'Optimistic Lock Error',
    [LanguageCodes.Arabic]: 'خطأ في القفل المتفائل',
  },
  [ERR_CODES.INVALID_STATE_TRANSITION]: {
    [LanguageCodes.English]: 'Invalid State Transition',
    [LanguageCodes.Arabic]: 'انتقال حالة غير صالح',
  },
  [ERR_CODES.OPERATION_NOT_ALLOWED]: {
    [LanguageCodes.English]: 'Operation Not Allowed',
    [LanguageCodes.Arabic]: 'العملية غير مسموح بها',
  },
  [ERR_CODES.GENERAL_ERROR]: {
    [LanguageCodes.English]: 'General Error',
    [LanguageCodes.Arabic]: 'خطأ عام',
  },
  [ERR_CODES.INTERNAL_SERVER_ERROR]: {
    [LanguageCodes.English]: 'Internal Server Error',
    [LanguageCodes.Arabic]: 'خطأ في الخادم الداخلي',
  },
  [ERR_CODES.INVALID_PARAMS]: {
    [LanguageCodes.English]: 'Invalid Parameters',
    [LanguageCodes.Arabic]: 'معلمات غير صالحة',
  },
  DUPLICATE_ENTRY: {
    [LanguageCodes.English]: 'Duplicate Entry',
    [LanguageCodes.Arabic]: 'إدخال مكرر',
  },
  FAILED_UPDATE_DATA: {
    [LanguageCodes.English]: 'Failed to Update Data',
    [LanguageCodes.Arabic]: 'فشل في تحديث البيانات',
  },
  CATEGORY_MUST_HAVE_CONTENT: {
    [LanguageCodes.English]: 'Category Must Have At Least One Content',
    [LanguageCodes.Arabic]: 'يجب أن تحتوي الفئة على محتوى واحد على الأقل',
  },
  INVALID_LANGUAGE_HEADER: {
    [LanguageCodes.English]: 'Invalid Language Header',
    [LanguageCodes.Arabic]: 'رأس اللغة غير صالح',
  },
  PHONE_NUMBER_ALREADY_EXISTS: {
    [LanguageCodes.English]: 'Phone Number Already Exists',
    [LanguageCodes.Arabic]: 'رقم الهاتف موجود بالفعل',
  },
  FILE_NOT_FOUND_ON_BUCKET: {
    [LanguageCodes.English]: 'File Not Found On Bucket',
    [LanguageCodes.Arabic]: 'الملف غير موجود على الدلو',
  },
  NO_REASON_TO_RESEND_CODE: {
    [LanguageCodes.English]: 'No Reason To Resend Code',
    [LanguageCodes.Arabic]: 'لا يوجد سبب لإعادة إرسال الرمز',
  },
  INVALID_DATA: {
    [LanguageCodes.English]: 'Invalid Data',
    [LanguageCodes.Arabic]: 'بيانات غير صالحة',
  },
  EXPIRED_CODE: {
    [LanguageCodes.English]: 'Expired Code',
    [LanguageCodes.Arabic]: 'الرمز المنتهي',
  },
  NO_REASON_TO_VERIFY: {
    [LanguageCodes.English]: 'No Reason To Verify',
    [LanguageCodes.Arabic]: 'لا يوجد سبب للتحقق',
  },
  INVALID_VERIFICATION_CODE: {
    [LanguageCodes.English]: 'Invalid Verification Code',
    [LanguageCodes.Arabic]: 'رمز التحقق غير صالح',
  },
  INVALID_TOKEN: {
    [LanguageCodes.English]: 'Invalid Token',
    [LanguageCodes.Arabic]: 'رمز غير صالح',
  },
  VERIFICATION_CODE_NOT_VERIFIED: {
    [LanguageCodes.English]: 'Verification Code Not Verified',
    [LanguageCodes.Arabic]: 'لم يتم التحقق من رمز التحقق',
  },
  EMAIL_NOT_FOUND: {
    [LanguageCodes.English]: 'Email Not Found',
    [LanguageCodes.Arabic]: 'البريد الإلكتروني غير موجود',
  },
  EMAIL_ALREADY_EXISTS: {
    [LanguageCodes.English]: 'Email Already Exists',
    [LanguageCodes.Arabic]: 'البريد الإلكتروني موجود بالفعل',
  },
  ROLE_NOT_FOUND: {
    [LanguageCodes.English]: 'Role Not Found',
    [LanguageCodes.Arabic]: 'الدور غير موجود',
  },
  BAD_REQUEST: {
    [LanguageCodes.English]: 'Bad Request',
    [LanguageCodes.Arabic]: 'طلب سيء',
  },
  NOT_ALLOWED: {
    [LanguageCodes.English]: 'Not Allowed',
    [LanguageCodes.Arabic]: 'غير مسموح',
  },
  NOT_FOUND: {
    [LanguageCodes.English]: 'Not Found',
    [LanguageCodes.Arabic]: 'غير موجود',
  },
  UNAUTHENTICATED: {
    [LanguageCodes.English]: 'Unauthenticated',
    [LanguageCodes.Arabic]: 'غير مصادق عليه',
  },
  UNAUTHORIZED: {
    [LanguageCodes.English]: 'Unauthorized',
    [LanguageCodes.Arabic]: 'غير مصرح',
  },
  VALIDATION_ERROR: {
    [LanguageCodes.English]: 'Validation Error',
    [LanguageCodes.Arabic]: 'خطأ في التحقق من الصحة',
  },
  ROUTE_NOT_FOUND: {
    [LanguageCodes.English]: 'Route Not Found',
    [LanguageCodes.Arabic]: 'المسار غير موجود',
  },
  INVALID_FILE_FORMAT: {
    [LanguageCodes.English]: 'Invalid File Format',
    [LanguageCodes.Arabic]: 'تنسيق الملف غير صالح',
  },
  INVALID_CREDINTIALS: {
    [LanguageCodes.English]: 'Invalid Credentials',
    [LanguageCodes.Arabic]: 'بيانات الاعتماد غير صالحة',
  },
  USER_NOT_VERIFIED: {
    [LanguageCodes.English]: 'User Not Verified',
    [LanguageCodes.Arabic]: 'المستخدم غير موثق',
  },
  USER_NOT_VERIFIED_BY_CRM: {
    [LanguageCodes.English]: 'User Not Verified by CRM',
    [LanguageCodes.Arabic]: 'المستخدم غير موثق بواسطة CRM',
  },
  IMAGE_ONLY: {
    [LanguageCodes.English]: 'You Can upload images only',
    [LanguageCodes.Arabic]: 'يمكنك رفع الصور فقط',
  },
};
