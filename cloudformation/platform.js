module.exports = {
	Mappings: {
		RegionMap: {
			'us-west-2': {
				S3Bucket: 'leo-cli-publishbucket-mzhr7agmqo7u',
				AuthTemplateUrl: 'https://leo-cli-publishbucket-mzhr7agmqo7u.s3-us-west-2.amazonaws.com/auth/release/cloudformation-latest.json',
				BusTemplateUrl: 'https://leo-cli-publishbucket-mzhr7agmqo7u.s3-us-west-2.amazonaws.com/leo-bus/3.2.0/cloudformation-1669137956326.json',
				BotmonTemplateUrl: 'https://leo-cli-publishbucket-mzhr7agmqo7u.s3-us-west-2.amazonaws.com/botmon/3.0.2/cloudformation-1667947716066.json',
				CognitoTemplateUrl: 'https://leo-cli-publishbucket-mzhr7agmqo7u.s3-us-west-2.amazonaws.com/leo-Cognito/cloudformation-latest.json'
			},
			'us-east-1': {
				"S3Bucket": "leo-cli-publishbucket-qzoiwmdgdtjy",
				"AuthTemplateUrl": "https://cdk-hnb659fds-assets-539247478240-us-east-1.s3.us-east-1.amazonaws.com/6662cfe80649ab543e9dd8b74862efe4607aab12f53f30abd01225123dc2bbd4.json",
				"BusTemplateUrl": "https://leo-cli-publishbucket-qzoiwmdgdtjy.s3.us-east-1.amazonaws.com/leo-bus/cloudformation-latest.json",
				"BotmonTemplateUrl": "https://leo-cli-publishbucket-qzoiwmdgdtjy.s3.us-east-1.amazonaws.com/botmon/cloudformation-latest.json",
				"CognitoTemplateUrl": "https://leo-cli-publishbucket-qzoiwmdgdtjy.s3.us-east-1.amazonaws.com/leo-Cognito/cloudformation-latest.json"
			}
		}
	},
	Parameters: {
		Environment: {
			Type: "String",
			Default: "dev",
			MinLength: 1,
			Description: "Environment"
		},
		InputCognitoId: {
			Type: 'String',
			Description: 'Cognito Pool Id used for request authentication. Leave Blank to have us create one'
		},
		TrustedAWSPrinciples: {
			Type: "CommaDelimitedList",
			Description: "List of AWS principles this stack trusts. (i.e. arn:aws:iam::<account_id>:root) Trusted accounts can assume the role of a bot on this stack and write to it."
		},
		QueueReplicationDestinationLeoBotRoleARNs: {
			Type: "CommaDelimitedList",
			Description: "List of LeoBotRole Arn's this stack will assume for replication. The AccountId and Stack of the first ARN become the default AccountId and Stack used when defining the QueueReplicationMapping."
		},
		QueueReplicationMapping: {
			Type: "String",
			Default: "[]",
			Description: "JSON Array of Objects and/or Strings the form [\"SOURCE_QUEUE_A\", {\"SOURCE_QUEUE_B\": { \"account\": \"DEST_ACCOUNT_ID\", \"stack\": \"DEST_STACK_NAME\", \"destination\":  \"DEST_QUEUE\"}}, {...}]. Omitting \"destination\" will default to the source queue name. Omitting \"account\" or \"stack\" will default to the first AccountId and Stack of the LeoBotRoleArn list. Simply listing a string will assume all defaults."
		},

		BusUiLogins: {
			Type: "String",
			Description: "Array of Logins",
			Default: "",
		},
		BusUiCustomJS: {
			Description: "Custom Javascript for the web app",
			Type: "String",
			Default: "",
		},



		LambdaInvokePolicy: {
			Type: "String",
			Default: "",
			Description: "AWS policy ARN to add to LeoCronRole.  Usefule for adding cross account invocations"
		},
		KinesisShards: {
			Type: "Number",
			MinValue: 1,
			Default: 1,
			Description: "Number of shards for LeoKinisesStream"
		},
		KinesisStreamProcessorMemory: {
			Type: "Number",
			Default: 640,
			MinValue: 128,
			MaxValue: 10240
		},
		FirehoseStreamProcessorMemory: {
			Type: "Number",
			Default: 640,
			MinValue: 128,
			MaxValue: 10240
		},
		CronProcessorMemory: {
			Type: "Number",
			Default: 256,
			MinValue: 128,
			MaxValue: 10240
		},
		EventTriggerMemory: {
			Type: "Number",
			Default: 128,
			MinValue: 128,
			MaxValue: 10240
		},
		LeoMonitorMemory: {
			Type: "Number",
			Default: 256,
			MinValue: 128,
			MaxValue: 10240
		},
		LeoStreamBillingMode: {
			Type: "String",
			Default: "PROVISIONED",
			AllowedValues: [
				"PROVISIONED",
				"PAY_PER_REQUEST"
			],
			Description: "Billing Mode for LeoStream dynamodb table"
		},
		LeoStreamMinReadCapacity: {
			Type: "Number",
			Default: 20
		},
		LeoStreamMaxReadCapacity: {
			Type: "Number",
			Default: 1000
		},
		LeoStreamMinWriteCapacity: {
			Type: "Number",
			Default: 20
		},
		LeoStreamMaxWriteCapacity: {
			Type: "Number",
			Default: 1000
		},
		LeoArchiveBillingMode: {
			Type: "String",
			Default: "PROVISIONED",
			AllowedValues: [
				"PROVISIONED",
				"PAY_PER_REQUEST"
			],
			Description: "Billing Mode for LeoArchive dynamodb table"
		},
		LeoArchiveMinReadCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoArchiveMaxReadCapacity: {
			Type: "Number",
			Default: 50
		},
		LeoArchiveMinWriteCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoArchiveMaxWriteCapacity: {
			Type: "Number",
			Default: 50
		},
		LeoEventBillingMode: {
			Type: "String",
			Default: "PROVISIONED",
			AllowedValues: [
				"PROVISIONED",
				"PAY_PER_REQUEST"
			],
			Description: "Billing Mode for LeoEvent dynamodb table"
		},
		LeoEventMinReadCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoEventMaxReadCapacity: {
			Type: "Number",
			Default: 50
		},
		LeoEventMinWriteCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoEventMaxWriteCapacity: {
			Type: "Number",
			Default: 50
		},
		LeoSettingsBillingMode: {
			Type: "String",
			Default: "PROVISIONED",
			AllowedValues: [
				"PROVISIONED",
				"PAY_PER_REQUEST"
			],
			Description: "Billing Mode for LeoSettings dynamodb table"
		},
		LeoSettingsMinReadCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoSettingsMaxReadCapacity: {
			Type: "Number",
			Default: 50
		},
		LeoSettingsMinWriteCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoSettingsMaxWriteCapacity: {
			Type: "Number",
			Default: 50
		},
		LeoCronBillingMode: {
			Type: "String",
			Default: "PROVISIONED",
			AllowedValues: [
				"PROVISIONED",
				"PAY_PER_REQUEST"
			],
			Description: "Billing Mode for LeoCron dynamodb table"
		},
		LeoCronMinReadCapacity: {
			Type: "Number",
			Default: 20
		},
		LeoCronMaxReadCapacity: {
			Type: "Number",
			Default: 200
		},
		LeoCronMinWriteCapacity: {
			Type: "Number",
			Default: 20
		},
		LeoCronMaxWriteCapacity: {
			Type: "Number",
			Default: 200
		},
		LeoSystemBillingMode: {
			Type: "String",
			Default: "PROVISIONED",
			AllowedValues: [
				"PROVISIONED",
				"PAY_PER_REQUEST"
			],
			Description: "Billing Mode for LeoSystem dynamodb table"
		},
		LeoSystemMinReadCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoSystemMaxReadCapacity: {
			Type: "Number",
			Default: 50
		},
		LeoSystemMinWriteCapacity: {
			Type: "Number",
			Default: 5
		},
		LeoSystemMaxWriteCapacity: {
			Type: "Number",
			Default: 50
		},

		StreamTTLSeconds: {
			Type: "Number",
			MinValue: 1,
			Default: 604800,
			Description: "Number of seconds before LeoStream records are auto deleted"
		},
		MonitorShardHashKey: {
			Type: "Number",
			MinValue: 0,
			Default: 0,
			Description: "Explicit hash key to use for the monitor data"
		},
	},
	Conditions: {
		createCognito: {
			'Fn::Equals': [
				{
					Ref: 'InputCognitoId'
				},
				''
			]
		}
	},
	Resources: {
		Auth: {
			Type: 'AWS::CloudFormation::Stack',
			Properties: {
				TemplateURL: {
					'Fn::FindInMap': [
						'RegionMap', {
							Ref: 'AWS::Region'
						},
						'AuthTemplateUrl'
					]
				},
				TimeoutInMinutes: '60'
			}
		},
		Bus: {
			Type: 'AWS::CloudFormation::Stack',
			Properties: {
				TemplateURL: {
					'Fn::FindInMap': [
						'RegionMap', {
							Ref: 'AWS::Region'
						},
						'BusTemplateUrl'
					]
				},
				TimeoutInMinutes: '60',
				Parameters: {
					Environment: {
						Ref: "Environment"
					},
					TrustedAWSPrinciples: { "Fn::Join": [",", { "Ref": "TrustedAWSPrinciples" }] },
					QueueReplicationDestinationLeoBotRoleARNs: { "Fn::Join": [",", { "Ref": "QueueReplicationDestinationLeoBotRoleARNs" }] },
					QueueReplicationMapping: { "Ref": "QueueReplicationMapping" },

					LambdaInvokePolicy: { Ref: "LambdaInvokePolicy" },
					KinesisShards: { Ref: "KinesisShards" },
					KinesisStreamProcessorMemory: { Ref: "KinesisStreamProcessorMemory" },
					FirehoseStreamProcessorMemory: { Ref: "FirehoseStreamProcessorMemory" },
					CronProcessorMemory: { Ref: "CronProcessorMemory" },
					EventTriggerMemory: { Ref: "EventTriggerMemory" },
					LeoMonitorMemory: { Ref: "LeoMonitorMemory" },
					LeoStreamBillingMode: { Ref: "LeoStreamBillingMode" },
					LeoStreamMinReadCapacity: { Ref: "LeoStreamMinReadCapacity" },
					LeoStreamMaxReadCapacity: { Ref: "LeoStreamMaxReadCapacity" },
					LeoStreamMinWriteCapacity: { Ref: "LeoStreamMinWriteCapacity" },
					LeoStreamMaxWriteCapacity: { Ref: "LeoStreamMaxWriteCapacity" },
					LeoArchiveBillingMode: { Ref: "LeoArchiveBillingMode" },
					LeoArchiveMinReadCapacity: { Ref: "LeoArchiveMinReadCapacity" },
					LeoArchiveMaxReadCapacity: { Ref: "LeoArchiveMaxReadCapacity" },
					LeoArchiveMinWriteCapacity: { Ref: "LeoArchiveMinWriteCapacity" },
					LeoArchiveMaxWriteCapacity: { Ref: "LeoArchiveMaxWriteCapacity" },
					LeoEventBillingMode: { Ref: "LeoEventBillingMode" },
					LeoEventMinReadCapacity: { Ref: "LeoEventMinReadCapacity" },
					LeoEventMaxReadCapacity: { Ref: "LeoEventMaxReadCapacity" },
					LeoEventMinWriteCapacity: { Ref: "LeoEventMinWriteCapacity" },
					LeoEventMaxWriteCapacity: { Ref: "LeoEventMaxWriteCapacity" },
					LeoSettingsBillingMode: { Ref: "LeoSettingsBillingMode" },
					LeoSettingsMinReadCapacity: { Ref: "LeoSettingsMinReadCapacity" },
					LeoSettingsMaxReadCapacity: { Ref: "LeoSettingsMaxReadCapacity" },
					LeoSettingsMinWriteCapacity: { Ref: "LeoSettingsMinWriteCapacity" },
					LeoSettingsMaxWriteCapacity: { Ref: "LeoSettingsMaxWriteCapacity" },
					LeoCronBillingMode: { Ref: "LeoCronBillingMode" },
					LeoCronMinReadCapacity: { Ref: "LeoCronMinReadCapacity" },
					LeoCronMaxReadCapacity: { Ref: "LeoCronMaxReadCapacity" },
					LeoCronMinWriteCapacity: { Ref: "LeoCronMinWriteCapacity" },
					LeoCronMaxWriteCapacity: { Ref: "LeoCronMaxWriteCapacity" },
					LeoSystemBillingMode: { Ref: "LeoSystemBillingMode" },
					LeoSystemMinReadCapacity: { Ref: "LeoSystemMinReadCapacity" },
					LeoSystemMaxReadCapacity: { Ref: "LeoSystemMaxReadCapacity" },
					LeoSystemMinWriteCapacity: { Ref: "LeoSystemMinWriteCapacity" },
					LeoSystemMaxWriteCapacity: { Ref: "LeoSystemMaxWriteCapacity" },
					StreamTTLSeconds: { Ref: "StreamTTLSeconds" },
					MonitorShardHashKey: { Ref: "MonitorShardHashKey" }
				}
			}
		},
		Cognito: {
			Type: 'AWS::CloudFormation::Stack',
			Properties: {
				TemplateURL: {
					'Fn::FindInMap': [
						'RegionMap', {
							Ref: 'AWS::Region'
						},
						'CognitoTemplateUrl'
					]
				},
				TimeoutInMinutes: '60'
			}
		},
		Botmon: {
			Type: 'AWS::CloudFormation::Stack',
			Properties: {
				TemplateURL: {
					'Fn::FindInMap': [
						'RegionMap', {
							Ref: 'AWS::Region'
						},
						'BotmonTemplateUrl'
					]
				},
				TimeoutInMinutes: '60',
				Parameters: {
					CognitoId: {
						'Fn::If': [
							'createCognito', {
								'Fn::GetAtt': 'Cognito.Outputs.IdentityPoolId'
							}, {
								Ref: 'InputCognitoId'
							}
						]
					},
					Logins: {
						Ref: "BusUiLogins"
					},
					CustomJS: {
						Ref: "BusUiCustomJS"
					},
					leoauth: {
						'Fn::Select': ['1', {
							'Fn::Split': ['/', {
								Ref: 'Auth'
							}]
						}]
					},
					leosdk: {
						'Fn::Select': ['1', {
							'Fn::Split': ['/', {
								Ref: 'Bus'
							}]
						}]
					},
					LeoAuth: {
						'Fn::Select': ['1', {
							'Fn::Split': ['/', {
								Ref: 'Auth'
							}]
						}]
					},
					LeoBus: {
						'Fn::Select': ['1', {
							'Fn::Split': ['/', {
								Ref: 'Bus'
							}]
						}]
					}					
				}
			},
			DependsOn: ['Auth', 'Bus', 'Cognito']
		},
		RSFParameter: {
			Type: 'AWS::SSM::Parameter',
			Properties: {
				Description: 'String',
				Name: { Ref: 'AWS::StackName' },
				Type: 'String',
				Value: {
					'Fn::Select': [
						'1',
						{
							'Fn::Split': [
								'/',
								{
									Ref: 'Bus'
								}
							]
						}
					]
				}
			}
		}
	},

	Metadata: {
		"AWS::CloudFormation::Interface": {
			ParameterGroups: [
				{
					Label: {
						default: "Lambda Configuration"
					},
					Parameters: [
						"KinesisStreamProcessorMemory",
						"FirehoseStreamProcessorMemory",
						"CronProcessorMemory",
						"EventTriggerMemory",
						"LeoMonitorMemory"
					]
				},
				{
					Label: {
						default: "LeoStream Configuration"
					},
					Parameters: [
						"LeoStreamBillingMode",
						"LeoStreamMinReadCapacity",
						"LeoStreamMaxReadCapacity",
						"LeoStreamMinWriteCapacity",
						"LeoStreamMaxWriteCapacity"
					]
				},
				{
					Label: {
						default: "LeoArchive Configuration"
					},
					Parameters: [
						"LeoArchiveBillingMode",
						"LeoArchiveMinReadCapacity",
						"LeoArchiveMaxReadCapacity",
						"LeoArchiveMinWriteCapacity",
						"LeoArchiveMaxWriteCapacity"
					]
				},
				{
					Label: {
						default: "LeoEvent Configuration"
					},
					Parameters: [
						"LeoEventBillingMode",
						"LeoEventMinReadCapacity",
						"LeoEventMaxReadCapacity",
						"LeoEventMinWriteCapacity",
						"LeoEventMaxWriteCapacity"
					]
				},
				{
					Label: {
						default: "LeoSettings Configuration"
					},
					Parameters: [
						"LeoSettingsBillingMode",
						"LeoSettingsMinReadCapacity",
						"LeoSettingsMaxReadCapacity",
						"LeoSettingsMinWriteCapacity",
						"LeoSettingsMaxWriteCapacity"
					]
				},
				{
					Label: {
						default: "LeoCron Configuration"
					},
					Parameters: [
						"LeoCronBillingMode",
						"LeoCronMinReadCapacity",
						"LeoCronMaxReadCapacity",
						"LeoCronMinWriteCapacity",
						"LeoCronMaxWriteCapacity"
					]
				},
				{
					Label: {
						default: "LeoSystem Configuration"
					},
					Parameters: [
						"LeoSystemBillingMode",
						"LeoSystemMinReadCapacity",
						"LeoSystemMaxReadCapacity",
						"LeoSystemMinWriteCapacity",
						"LeoSystemMaxWriteCapacity"
					]
				}
			]
		}
	},
};
